<template>
  <div>
    <Breadcrumb leading="Regions" trialing="" breadcrumb="Region / list" />

    <div class="p-1 mx-auto sm:p-3 lg:p-8">
      <div class="w-full md:flex md:space-x-3 lg:space-x-8">
        <div class="w-full mt-3 md:mt-0">
          <div class="grid grid-cols-12 md:gap-3">
            <div class="col-span-12 md:mt-0">
              <div class="overflow-hidden border-2 border-dashed rounded-md">
                <div>
                  <div
                    class="flex flex-wrap items-center justify-between w-full p-2 bg-white border-b border-gray-200  sm:px-6 lg:px-8 sm:py-3 lg:py-4"
                  >
                    <div class="flex-grow">
                      <div class="flex mt-1">
                        <div
                          class="relative flex items-stretch flex-grow  focus-within:z-10"
                        >
                          <input
                            type="search"
                            placeholder="Searh"
                            @keyup="search"
                            v-model="searching"
                            class="flex-grow w-full h-8 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <RegionItem :treeRegions="treeRegions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserIcon, ClockIcon } from '@vue-hero-icons/outline'

export default {
  middleware: ['authIndent'],

  data() {
    return {
      treeRegions: [],
      searching: '',
    }
  },

  components: {
    UserIcon,
    ClockIcon,
  },

  watch: {
    '$route.query'(query) {
      this.getTreeRegions(query)
    },
  },

  methods: {
    async search(e) {
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            search: e.target.value,
          }),
        })
        .catch(() => {})
    },

    async getTreeRegions(query = this.$route.query) {
      try {
        await this.$axios
          .$get('regions?per-page=7', {
            params: {
              page: query.page,
              ...query,
            },
          })
          .then((response) => {
            this.treeRegions = response.data
            this.meta = response.meta
          })
      } catch (e) {}
    },

    statusMessage(type, message) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        icon: type,
        title: message,
      })
    },
  },

  mounted() {
    if (this.$route.query.search) {
      this.searching = this.$route.query.search
    }
    this.getTreeRegions()
  },
}
</script>
