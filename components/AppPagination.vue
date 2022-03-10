<template>
  <div class="flex items-center justify-between pt-2">
    <div class="flex justify-between flex-1 sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md  hover:bg-gray-50"
        :class="{ 'cursor-not-allowed': meta.current_page === 1 }"
        @click.prevent="switched(meta.current_page - 1)"
      >
        Previous
      </a>
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md  hover:bg-gray-50"
        :class="{
          'cursor-not-allowed': meta.current_page === meta.last_page,
        }"
        @click.prevent="switched(meta.current_page + 1)"
      >
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ from }}</span>
          to
          <span class="font-medium">{{ to }}</span>
          of
          <span class="font-medium">{{ meta.total }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  rounded-l-md hover:bg-gray-50"
            :class="{ 'cursor-not-allowed': meta.current_page === 1 }"
            @click.prevent="switched(meta.current_page - 1)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <template v-if="section > 1">
            <a
              href="#"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50"
              @click.prevent="switched(1)"
            >
              1
            </a>
            <a
              href="#"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50"
              @click.prevent="goBackwardASection"
            >
              ...
            </a>
          </template>

          <!-- Current: " bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a
            href="#"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50"
            v-for="page in pages"
            :class="{
              'z-10 bg-indigo-50 border-indigo-500 text-indigo-600':
                meta.current_page === page,
            }"
            :key="page"
            @click.prevent="switched(page)"
          >
            {{ page | eng2bengali }}
          </a>

          <template v-if="section < sections">
            <a
              href="#"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50"
              @click.prevent="goForwardASection"
            >
              ...
            </a>
            <a
              href="#"
              aria-current="page"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50"
              @click.prevent="switched(meta.last_page)"
            >
              {{ meta.last_page | eng2bengali }}
            </a>
          </template>

          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  rounded-r-md hover:bg-gray-50"
            :class="{
              'cursor-not-allowed': meta.current_page === meta.last_page,
            }"
            @click.prevent="switched(meta.current_page + 1)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      numbersPerSection: 7,
      from: 1,
      to: 10,
    }
  },

  filters: {
    eng2bengali(value) {
      var numbers = {
        0: '০',
        1: '১',
        2: '২',
        3: '৩',
        4: '৪',
        5: '৫',
        6: '৬',
        7: '৭',
        8: '৮',
        9: '৯',
      }

      let input = value.toString()

      var output = []
      for (var i = 0; i < input.length; ++i) {
        if (numbers.hasOwnProperty(input[i])) {
          output.push(numbers[input[i]])
        } else {
          output.push(input[i])
        }
      }
      return output.join('')
    },
  },

  computed: {
    section() {
      return Math.ceil(this.meta.current_page / this.numbersPerSection)
    },

    sections() {
      return Math.ceil(this.meta.last_page / this.numbersPerSection)
    },

    lastPage() {
      let lastPage =
        (this.section - 1) * this.numbersPerSection + this.numbersPerSection

      if (this.section == this.sections) {
        lastPage = this.meta.last_page
      }

      return lastPage
    },

    pages() {
      return _.range(
        (this.section - 1) * this.numbersPerSection + 1,
        this.lastPage + 1
      )
    },
  },

  mounted() {
    if (this.meta.current_page > this.meta.last_page) {
      this.switched(this.meta.last_page)
      this.startingAndEnding(this.meta.last_page)
    } else {
      this.startingAndEnding(this.meta.current_page)
    }
  },

  methods: {
    async switched(page) {
      if (this.pageIsOutOfBounds(page)) {
        return
      }
      this.startingAndEnding(page)
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, { page: page }),
        })
        .catch(() => {})
    },

    pageIsOutOfBounds(page) {
      return page <= 0 || page > this.meta.last_page
    },

    async goBackwardASection() {
      this.switched(this.firstPageOfSection(this.section - 1))
    },

    async goForwardASection() {
      this.switched(this.firstPageOfSection(this.section + 1))
    },

    firstPageOfSection(section) {
      return (section - 1) * this.numbersPerSection + 1
    },

    startingAndEnding(currentPage) {
      this.from = (currentPage - 1) * this.meta.per_page + 1
      let noOfLastImg = currentPage * this.meta.per_page
      this.to = noOfLastImg > this.meta.total ? this.meta.total : noOfLastImg
    },
  },
}
</script>

