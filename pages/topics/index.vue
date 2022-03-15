<template>
  <div>
    <Breadcrumb leading="Topics" trialing="" breadcrumb="Topic / list" />

    <div class="p-1 mx-auto sm:p-3 lg:p-8">
      <div class="w-full md:flex md:space-x-3 lg:space-x-8">
        <div class="w-full md:w-4/12">
          <div class="p-2 border-2 border-dashed rounded-md sm:p-6 lg:p-8">
            <h1 class="text-xl font-semibold text-cyan-500">
              Create New Topic
            </h1>

            <form @submit.prevent="createTopic">
              <div class="sm:rounded-tl-md sm:rounded-tr-md">
                <div class="w-full py-1 md:py-3">
                  <AppLabel> Name </AppLabel>
                  <AppInput
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    v-model="form.name"
                  />
                  <AppInputError v-if="errors.name">
                    {{ errors.name[0] }}
                  </AppInputError>
                </div>
                <div class="w-full py-1 md:py-3">
                  <AppLabel> Slug </AppLabel>
                  <AppInput
                    placeholder="SLug"
                    type="text"
                    id="slug"
                    name="slug"
                    v-model="form.slug"
                  />
                  <AppInputError v-if="errors.slug">
                    {{ errors.slug[0] }}
                  </AppInputError>
                </div>
              </div>

              <div
                class="flex items-center mt-3 mb-1 text-right  sm:rounded-bl-md sm:rounded-br-md"
              >
                <AppButton
                  class="text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                >
                  Submit
                </AppButton>
              </div>
            </form>
          </div>
        </div>
        <div class="w-full h-screen mt-3 overflow-y-auto md:mt-0 md:w-8/12">
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

                  <div class="divide-y divide-gray-200" v-if="topics.length">
                    <div v-for="topic in topics" :key="topic.id">
                      <div
                        class="justify-between p-2 bg-white  sm:px-6 lg:px-8 sm:py-3 lg:py-4 sm:flex group"
                      >
                        <div
                          class="flex flex-wrap items-center justify-between w-full "
                        >
                          <div class="w-full mb-2 md:mb-0 md:w-4/12">
                            <h2
                              class="pt-1 text-base font-medium leading-none text-gray-700 "
                            >
                              {{ topic.name }}
                            </h2>
                            <div class="flex items-center">
                              <UserIcon class="w-4 h-4 mr-1 text-gray-500" />
                              <div class="text-sm text-gray-500">User</div>
                            </div>
                            <div class="flex items-center mt-1">
                              <ClockIcon class="w-4 h-4 mr-1 text-gray-500" />
                              <div class="text-sm text-gray-500">
                                {{ topic.created_at }}
                              </div>
                            </div>
                          </div>

                          <div
                            class="transition-opacity duration-200 opacity-100  md:opacity-0 group-hover:opacity-100"
                          >
                            <div class="flex items-center space-x-2">
                              <button
                                type="button"
                                class="inline-flex items-center justify-center px-2 py-1 font-medium tracking-wider text-center text-white bg-blue-600 border border-transparent rounded-md shadow-sm  hover:bg-blue-700 focus:ring-blue-500 text-bases focus:outline-none focus:ring-2 focus:ring-offset-2"
                                @click="editTopic(topic)"
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                class="inline-flex items-center justify-center px-2 py-1 font-medium tracking-wider text-center text-white bg-red-600 border border-transparent rounded-md shadow-sm  hover:bg-red-700 focus:ring-red-500 text-bases focus:outline-none focus:ring-2 focus:ring-offset-2"
                                @click="deleteTopic(topic.slug)"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="px-2 pb-2 bg-white">
                      <AppPagination :meta="meta" v-if="meta.last_page > 1" />
                    </div>
                  </div>
                  <div class="w-full p-4" v-else>No topic listed yet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppTopicEditModal
        :selectedTopic="selectedTopicFromTopicPage"
        @updatedFromTopicModal="reloadTopics"
      />
    </div>
  </div>
</template>
<script>
import { UserIcon, ClockIcon } from '@vue-hero-icons/outline'
export default {
  middleware: ['authIndent'],

  data() {
    return {
      errors: [],
      topics: [],
      meta: {},

      searching: '',
      selectedTopicFromTopicPage: null,

      form: {
        name: '',
        slug: '',
      },
    }
  },

  components: {
    UserIcon,
    ClockIcon,
  },

  watch: {
    '$route.query'(query) {
      this.getTopics(query)
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

    reloadTopics() {
      this.getTopics()
    },

    async deleteTopic(topicSlug) {
      try {
        await this.$axios
          .delete(`admin/topics/${topicSlug}`)
          .then(({ data }) => {
            this.getTopics()
            this.statusMessage('success', 'Topic deleted successfully')
          })
      } catch (error) {
        if (error.response.status === 500) {
          this.statusMessage('error', 'Server Error')
        } else {
          this.statusMessage('error', 'Something went wrong')
        }
      }
    },

    async editTopic(topic) {
      this.selectedTopicFromTopicPage = topic
      this.$modal.show('app-topic-edit-modal')
    },

    async createTopic() {
      console.log(this.form)
      try {
        await this.$axios.post(`admin/topics`, this.form).then(({ data }) => {
          this.statusMessage('success', 'Topic uploaded successfully')
          this.getTopics()
          this.formClear()
        })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something wrong')
      }
    },

    formClear() {
      this.form = {
        name: '',
        slug: '',
      }
    },

    async getTopics(query = this.$route.query) {
      try {
        await this.$axios
          .$get('admin/topics?per-page=7', {
            params: {
              page: query.page,
              ...query,
            },
          })
          .then((response) => {
            this.topics = response.data
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
    this.getTopics()
  },
}
</script>

<style>
.vm--modal {
  width: 80% !important;
  height: 600px !important;
  top: 50px !important;
  bottom: 0 !important;
  margin: auto !important;
  left: 0 !important;
  right: 0 !important;
  overflow: scroll !important;
}

@media only screen and (max-width: 768px) {
  .vm--modal {
    width: 100% !important;
  }
}
</style>


