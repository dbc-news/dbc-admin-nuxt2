<template>
  <div class="w-full">
    <Breadcrumb
      leading="Articles"
      trialing="New Article"
      :href="{ name: 'articles-create' }"
      breadcrumb="Article / list"
    />

    <div
      class="
        flex flex-wrap
        items-center
        justify-between
        w-full
        p-2
        sm:px-6
        lg:px-8
      "
    ></div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="mb-3">
          <input
            type="search"
            placeholder="Searh"
            @keyup="search"
            v-model="searching"
            class="
              flex-grow
              w-full
              h-8
              px-2
              border border-gray-300
              rounded-md
              shadow-sm
              focus:border-cyan-300
              focus:ring
              focus:ring-cyan-200
              focus:ring-opacity-50
              focus:outline-none
            "
          />
        </div>

        <div
          class="
            min-w-full
            overflow-hidden overflow-x-auto
            align-middle
            shadow
            sm:rounded-lg
          "
        >
          <div class="">
            <div
              class="
                items-center
                justify-between
                p-2
                mb-1
                bg-white
                rounded-md
                sm:px-6
                lg:px-8
                sm:py-3
                lg:py-4
                sm:flex
                group
              "
              v-for="(article, index) in articles"
              :key="article.id"
            >
              <div class="flex items-center space-x-1 sm:mr-6">
                <div class="w-4 my-2">{{ index + 1 }}</div>
                <div
                  class="flex-shrink-0 mb-4 sm:mb-0"
                  v-if="article.thumbnails"
                >
                  <img
                    class="
                      w-16
                      h-16
                      text-gray-300
                      bg-white
                      border border-gray-300
                      rounded-sm
                    "
                    v-if="article.thumbnails.thumb160x84"
                    v-lazy="article.thumbnails.thumb160x84"
                    :alt="article.name"
                  />
                </div>

                <div class="flex-shrink-0 mb-4 sm:mb-0" v-else>
                  <img
                    class="
                      w-16
                      h-16
                      text-gray-300
                      bg-white
                      border border-gray-300
                      rounded-sm
                    "
                    src="@/assets/images/placeholder.png"
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
                    class="
                      inline-block
                      px-1
                      mb-1
                      mr-1
                      text-gray-500
                      bg-white
                      border border-gray-300
                      rounded
                    "
                  >
                    {{ category.name }}
                  </a>
                </div>

                <div
                  class="
                    transition-opacity
                    duration-200
                    opacity-100
                    md:opacity-0
                    group-hover:opacity-100
                  "
                >
                  <div class="flex items-center space-x-2">
                    <nuxt-link
                      :to="link(article.slug)"
                      exact
                      class="
                        inline-flex
                        items-center
                        justify-center
                        px-2
                        py-1
                        font-medium
                        tracking-wider
                        text-center text-white
                        bg-blue-600
                        border border-transparent
                        rounded-md
                        shadow-sm
                        text-bases
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        hover:bg-blue-700
                        focus:ring-blue-500
                      "
                      >Edit
                    </nuxt-link>

                    <button
                      type="button"
                      class="
                        inline-flex
                        items-center
                        justify-center
                        px-2
                        py-1
                        font-medium
                        tracking-wider
                        text-center text-white
                        bg-red-600
                        border border-transparent
                        rounded-md
                        shadow-sm
                        hover:bg-red-700
                        focus:ring-red-500
                        text-bases
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                      "
                      @click="deleteArticle(article.slug)"
                    >
                      Delete
                    </button>

                    <nuxt-link
                      to="#"
                      exact
                      class="
                        inline-flex
                        items-center
                        justify-center
                        px-2
                        py-1
                        font-medium
                        tracking-wider
                        text-center text-white
                        bg-blue-600
                        border border-transparent
                        rounded-md
                        shadow-sm
                        text-bases
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        hover:bg-blue-700
                        focus:ring-blue-500
                      "
                      >View
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="px-2 pb-2 bg-white">
            <AppPagination :meta="meta" v-if="meta.last_page > 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ClockIcon, UserIcon, ChevronDownIcon } from '@vue-hero-icons/outline'
export default {
  middleware: ['authIndent'],

  data() {
    return {
      searching: '',
      articles: [],
      meta: {},
    }
  },

  components: {
    UserIcon,
    ClockIcon,
    ChevronDownIcon,
  },

  watch: {
    '$route.query'(query) {
      this.getArticles(query)
    },
  },

  methods: {
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

    async search(e) {
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            search: e.target.value,
          }),
        })
        .catch(() => {})
    },

    async getArticles(query = this.$route.query) {
      try {
        await this.$axios
          .$get('articles?per-page=5', {
            params: {
              page: query.page,
              ...query,
            },
          })
          .then((response) => {
            this.articles = response.data
            this.meta = response.meta
          })
      } catch (e) {}
    },

    link(arg) {
      return {
        name: 'articles-edit-slug',
        params: {
          slug: arg,
        },
      }
    },

    async deleteArticle(articleSlug) {
      try {
        await this.$axios.delete(`articles/${articleSlug}`).then(({ data }) => {
          this.getArticles()
          this.statusMessage('success', 'Article deleted successfully')
        })
      } catch (error) {
        if (error.response.status === 500) {
          this.statusMessage('error', 'Server Error')
        } else {
          this.statusMessage('error', 'Something went wrong')
        }
      }
    },
  },

  mounted() {
    this.getArticles()
    if (this.$route.query.search) {
      this.searching = this.$route.query.search
    }
  },
}
</script>
