<template>
  <div
    class="items-center justify-between p-2 mb-1 bg-white rounded-md  sm:px-6 lg:px-8 sm:py-3 lg:py-4 sm:flex group"
    :class="{ 'opacity-50': article.archived }"
  >
    <div class="flex items-center space-x-1 sm:mr-6">
      <div class="flex-shrink-0 mb-4 sm:mb-0" v-if="article.thumbnails">
        <img
          class="w-16 h-16 text-gray-300 bg-white border border-gray-300 rounded-sm "
          v-if="article.thumbnails.thumb160x84"
          v-lazy="article.thumbnails.thumb160x84"
          :alt="article.name"
        />
      </div>

      <div class="flex-shrink-0 mb-4 sm:mb-0" v-else>
        <img
          class="w-16 h-16 text-gray-300 bg-white border border-gray-300 rounded-sm "
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
          <div class="text-sm text-gray-500">Mon, Jan 17, 2022 5:36 PM</div>
        </div>
      </div>

      <div class="w-full mb-1 md:mb-0 md:w-4/12" v-if="categories.length">
        <a
          v-for="category in categories"
          :key="category.id"
          href="#"
          class="inline-block px-1 mb-1 mr-1 text-gray-500 bg-white border border-gray-300 rounded "
        >
          {{ category.name }}
        </a>
        <div v-if="categoryMoreCount > 0" class="text-gray-500">
          +{{ categoryMoreCount }} more
        </div>
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

          <button
            type="button"
            class="inline-flex items-center justify-center px-2 py-1 font-medium tracking-wider text-center text-white bg-red-600 border border-transparent rounded-md shadow-sm  hover:bg-red-700 focus:ring-red-500 text-bases focus:outline-none focus:ring-2 focus:ring-offset-2"
            @click="deleteArticle(article.slug)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClockIcon, UserIcon } from '@vue-hero-icons/outline'

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  components: {
    ClockIcon,
    UserIcon,
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

    async deleteArticle(articleSlug) {
      try {
        await this.$axios
          .delete(`admin/articles/${encodeURI(articleSlug)}`)
          .then(({ data }) => {
            this.$emit('reloadEventFromArticleItem')
            this.statusMessage('success', 'Article deleted successfully')
          })
      } catch (error) {
        // if (error.response.status === 500) {
        //   this.statusMessage('error', 'Server Error')
        // } else {
        //   this.statusMessage('error', 'Something went wrong')
        // }
        this.statusMessage('error', 'Something went wrong')
        console.log(error)
      }
    },
  },

  computed: {
    categories() {
      let count = this.article.categories.length
      let categories = this.article.categories
      if (count > 4) {
        categories = this.article.categories.slice(0, 4)
      }

      return categories
    },

    categoryMoreCount() {
      return this.article.categories.length - 4
    },
  },
}
</script>
