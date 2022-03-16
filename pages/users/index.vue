<template>
  <div class="flex">
    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="relative z-0 flex-1 h-screen overflow-y-auto bg-white  focus:outline-none xl:order-last"
        >
          <nav
            class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb"
          >
            <a
              href="#"
              class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900 "
            >
              <ChevronLeftIcon />
              <span>Directory</span>
            </a>
          </nav>

          <article>
            <div>
              <div>
                <img
                  class="object-cover w-full h-32 lg:h-48"
                  src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                />
              </div>
              <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div class="flex" v-if="user">
                    <img
                      class="w-24 h-24 rounded-full  ring-4 ring-white sm:h-32 sm:w-32"
                      v-if="user.profile_photo_path"
                      v-lazy="user.profile_photo_path"
                      :alt="user.name"
                    />
                  </div>

                  <div class="flex" v-else>
                    <img
                      class="w-24 h-24 rounded-full  ring-4 ring-white sm:h-32 sm:w-32"
                      v-if="$auth.user.data.profile_photo_path"
                      v-lazy="$auth.user.data.profile_photo_path"
                      :alt="$auth.user.data.name"
                    />
                  </div>

                  <div
                    class="mt-6  sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                  >
                    <div class="flex-1 min-w-0 mt-6 sm:hidden 2xl:block">
                      <h1 class="text-2xl font-bold text-gray-900 truncate">
                        {{ user ? user.name : $auth.user.data.name }}
                      </h1>
                    </div>
                    <div
                      class="flex flex-col mt-6 space-y-3  justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <nuxt-link
                        :to="link(user ? user.id : $auth.user.data.id)"
                        exact
                        type="button"
                        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <PencilIcon class="w-5 h-5 mr-2 -ml-1 text-gray-400" />
                        <span>Edit</span>
                      </nuxt-link>
                      <button
                        type="button"
                        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <UserSecretSolid />
                        <span>Impersonate</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex-1 hidden min-w-0 mt-6 sm:block 2xl:hidden">
                  <h1 class="text-2xl font-bold text-gray-900 truncate">
                    Ricardo Cooper
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-6 sm:mt-2 2xl:mt-5">
              <div class="border-b border-gray-200"></div>
            </div>

            <div class="max-w-5xl px-4 mx-auto mt-6 sm:px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Phone</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ user ? user.name : $auth.user.data.name }}
                  </dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Email</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ user ? user.name : $auth.user.data.name }}
                  </dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Designation</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    Senior Front-End Developer
                  </dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Role</dt>
                  <dd class="mt-1 text-sm text-gray-900">role</dd>
                </div>

                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Region</dt>
                  <dd class="mt-1 text-sm text-gray-900">Region</dd>
                </div>

                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">About</dt>
                  <dd class="mt-1 space-y-5 text-sm text-gray-900 max-w-prose">
                    <p>{{ user ? user.name : $auth.user.data.name }}</p>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </main>
        <UserAside @searchActionFromAside="search" :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
import { PencilIcon, ChevronLeftIcon } from '@vue-hero-icons/outline'
import UserSecretSolid from '@/assets/icons/UserSecretSolid'

export default {
  middleware: ['authIndent'],

  data() {
    return {
      users: [],
      user: null,
    }
  },

  components: {
    PencilIcon,
    UserSecretSolid,
    ChevronLeftIcon,
  },

  watch: {
    '$route.query'(query) {
      this.getUsers(query)
      this.showUser(query.id)
    },
  },

  methods: {
    async search(value) {
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            search: value,
          }),
        })
        .catch(() => {})
    },

    async getUsers(query = this.$route.query) {
      try {
        await this.$axios
          .$get('admin/users?per-page=5', {
            params: {
              page: query.page,
              ...query,
            },
          })
          .then((response) => {
            this.users = response.data
          })
      } catch (e) {}
    },

    async showUser(id) {
      if (id) {
        try {
          await this.$axios.$get(`admin/users/${id}`).then((response) => {
            this.user = response.data
          })
        } catch (e) {}
      }
      return this.user
    },

    link(id) {
      return {
        name: 'users-edit-id',
        params: {
          id,
        },
      }
    },
  },

  mounted() {
    this.getUsers()
    this.showUser(this.$route.query.id)
  },
}
</script>
