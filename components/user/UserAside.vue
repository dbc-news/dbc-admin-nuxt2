<template>
  <aside
    class="flex-shrink-0 hidden h-screen bg-white border-r border-gray-200  xl:order-first xl:flex xl:flex-col w-96"
  >
    <div class="px-6 pt-6 pb-4">
      <div>
        <nuxt-link
          :to="{ name: 'users-create' }"
          class="inline-flex items-center justify-center w-full px-4 py-2 font-medium tracking-wide text-center text-white border border-transparent rounded-md shadow-sm  text-bases focus:outline-none focus:ring-2 focus:ring-offset-2 bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
        >
          Create New User
        </nuxt-link>
      </div>
      <h2 class="text-lg font-medium text-gray-900">Directory</h2>
      <p class="mt-1 text-sm text-gray-600">
        Search directory of {{ users.length }} employees
      </p>
      <form class="flex mt-6 space-x-4" action="#">
        <div class="flex-1 min-w-0">
          <label for="search" class="sr-only">Search</label>
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
            >
              <SearchIcon class="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              @keyup="search"
              v-model="searching"
              class="block w-full pl-10 border-gray-300 rounded-md  focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            px-3.5
            py-2
            border border-gray-300
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-pink-500
          "
        >
          <FilterIcon class="w-5 h-5 text-gray-400" />
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
    <nav class="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
      <div class="relative">
        <ul role="list" class="relative z-0 divide-y divide-gray-200">
          <li v-for="user in users" :key="user.id">
            <div
              class="relative flex items-center px-6 py-5 space-x-3  hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              :class="{
                'ring-2 ring-inset ring-pink-500':
                  user.id == ($route.query ? $route.query.id : null),
              }"
            >
              <div class="flex-shrink-0">
                <img
                  class="w-10 h-10 rounded-full"
                  v-if="user.profile_photo_path"
                  v-lazy="user.profile_photo_path"
                  :alt="user.name"
                />
              </div>
              <div class="flex-1 min-w-0">
                <nuxt-link :to="link(user.id)" exact class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    {{ user.name }}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ user.display_name }}
                  </p>
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
import { FilterIcon, SearchIcon } from '@vue-hero-icons/outline'

export default {
  middleware: ['authIndent'],

  data() {
    return {
      searching: '',
    }
  },

  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  components: {
    FilterIcon,
    SearchIcon,
  },

  methods: {
    async search(e) {
      this.$emit('searchActionFromAside', e.target.value)
    },

    link(id) {
      return {
        name: 'users',
        query: {
          id: id,
          search: this.searching,
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
