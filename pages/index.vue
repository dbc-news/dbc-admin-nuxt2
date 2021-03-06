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
        <div class="mb-3">
          <button
            type="button"
            class="cursor-pinter"
            @click.prevent="toggleArchiveArticles"
          >
            <ArchiveIcon class="inline-block w-4 h-4 text-gray-500" />
            View archive product
          </button>
        </div>
        <div
          class="min-w-full overflow-hidden overflow-x-auto align-middle shadow  sm:rounded-lg"
        >
          <div class="" v-if="articles.length">
            <ArticleItem
              v-for="article in articles"
              :key="article.id"
              :article="article"
              @reloadEventFromArticleItem="getArticles"
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
import { PencilIcon, ArchiveIcon } from '@vue-hero-icons/outline'

export default {
  middleware: ['authIndent'],

  data() {
    return {
      articles: [],
      meta: {},
      archived: false,

      searching: '',
    }
  },

  components: {
    PencilIcon,
    ArchiveIcon,
  },

  watch: {
    '$route.query'(query) {
      this.getArticles(query)
    },
  },

  async asyncData({ app, query = this.$route.query }) {
    let articlesResponse = await app.$axios.$get('admin/articles?per-page=5', {
      params: {
        page: query.page,
        ...query,
      },
    })
    return {
      articles: articlesResponse.data,
      meta: articlesResponse.meta,
    }
  },

  methods: {
    async getArticles(query = this.$route.query) {
      console.log(query)
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

    async toggleArchiveArticles() {
      this.archived = !this.archived
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            archived: this.archived,
          }),
        })
        .catch(() => {})
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
  },

  mounted() {
    if (this.$route.query.search) {
      this.searching = this.$route.query.search
    }
  },
}
</script>
