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
    ></div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="mb-3">
          <input
            type="search"
            placeholder="Searh"
            @keyup="search"
            v-model="searching"
            class="flex-grow w-full h-8 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 focus:outline-none"
          />
        </div>

        <div
          class="min-w-full overflow-hidden overflow-x-auto align-middle shadow  sm:rounded-lg"
        >
          <div class="" v-if="articles.length">
            <ArticleItem
              v-for="article in articles"
              :key="article.id"
              :article="article"
            />
          </div>
          <div class="w-full p-2 text-center" v-else>No article listed yet</div>

          <div class="px-2 pb-2 bg-white" v-if="meta.last_page > 1">
            <AppPagination :meta="meta" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['authIndent'],

  data() {
    return {
      articles: [],
      meta: {},

      searching: '',
    }
  },

  watch: {
    '$route.query'(query) {
      this.getArticles(query)
    },
  },

  async asyncData({ app }) {
    let articlesResponse = await app.$axios.$get('admin/articles?per-page=5')
    return {
      articles: articlesResponse.data,
      meta: articlesResponse.meta,
    }
  },

  methods: {
    async getArticles(query = this.$route.query) {
      try {
        await this.$axios
          .$get('admin/articles?per-page=5', {
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
        await this.$axios
          .delete(`articles/admin/${articleSlug}`)
          .then(({ data }) => {
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
    if (this.$route.query.search) {
      this.searching = this.$route.query.search
    }
  },
}
</script>
