<template>
  <div class="w-full">
    <Breadcrumb
      leading="Articles"
      trialing="New Article"
      :href="{ name: 'articles-create' }"
      breadcrumb="Article / list"
    />

    <div
      class="flex flex-wrap items-center justify-between w-full p-2  sm:px-6 lg:px-8"
    >
      <!-- <div class="flex-grow mr-1">
        <XFilterationSearch />
      </div>
      <div class="flex flex-wrap">
        <XFilterationSelectUser />
        <XFilterationMoreFilter />
        <XFilterationRecordSorting />
      </div> -->
    </div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div
          class="min-w-full overflow-hidden overflow-x-auto align-middle shadow  sm:rounded-lg"
        >
          <div class="pb-3">
            <div
              class="items-center justify-between p-2 mb-1 bg-white rounded-md  sm:px-6 lg:px-8 sm:py-3 lg:py-4 sm:flex group"
              v-for="(article, index) in articles"
              :key="article.id"
            >
              <div class="flex items-center space-x-1 sm:mr-6">
                <div class="w-4 my-2">{{ index + 1 }}</div>
                <div class="flex-shrink-0 mb-4 sm:mb-0">
                  <img
                    class="w-16 h-16 text-gray-300 bg-white border border-gray-300 rounded-sm "
                    src="http://metro.test/storage/1/blob"
                    alt="article"
                  />
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between w-full">
                <div class="w-full mb-2 md:mb-0 md:w-4/12">
                  <a href="#">
                    <h2
                      class="text-base font-medium leading-none text-gray-700"
                      style="
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                      "
                    >
                      {{ article.title }}
                    </h2>
                  </a>
                  <div class="flex items-center space-x-1">
                    <UserIcon class="w-4 h-4 text-sm text-gray-500" />
                    <div class="text-sm text-gray-500">
                      {{ article.user.name }}
                    </div>
                  </div>
                  <div class="flex items-center mt-1 space-x-1">
                    <ClockIcon class="w-4 h-4 text-sm text-gray-500" />
                    <div class="text-sm text-gray-500">
                      Mon, Jan 17, 2022 5:36 PM
                    </div>
                  </div>
                </div>

                <div
                  class="w-full mb-1 md:mb-0 md:w-4/12"
                  v-if="article.categories.length"
                >
                  <a
                    v-for="category in article.categories"
                    :key="category.id"
                    href="#"
                    class="inline-block px-1 mb-1 mr-1 text-gray-500 bg-white border border-gray-300 rounded "
                  >
                    {{ category.name }}
                  </a>
                </div>

                <div
                  class="transition-opacity duration-200 opacity-100  md:opacity-0 group-hover:opacity-100"
                >
                  <div class="flex items-center space-x-2">
                    <nuxt-link
                      :to="link(article.slug)"
                      exact
                      class="inline-flex items-center justify-center px-2 py-1 font-medium tracking-wider text-center text-white bg-blue-600 border border-transparent rounded-md shadow-sm  text-bases focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-700 focus:ring-blue-500"
                      >Edit
                    </nuxt-link>
                    <FormSmallButton
                      class="text-white bg-red-600  hover:bg-red-700 focus:ring-red-500"
                    >
                      Delete
                    </FormSmallButton>
                    <FormSmallButton
                      class="text-white bg-green-600  hover:bg-green-700 focus:ring-green-500"
                    >
                      View
                    </FormSmallButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- <XArticlePaginate /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { ClockIcon, UserIcon, ChevronDownIcon } from '@vue-hero-icons/outline'
export default {
  components: {
    UserIcon,
    ClockIcon,
    ChevronDownIcon,
  },
  middleware: ['redirectIfGuest'],

  computed: {
    ...mapGetters({
      articles: 'articles',
    }),
  },
  methods: {
    link(arg) {
      return {
        name: 'articles-edit-slug',
        params: {
          slug: arg,
        },
      }
    },
  },
}
</script>
