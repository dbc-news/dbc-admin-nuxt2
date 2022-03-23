<template>
  <div
    class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200  lg:border-none"
  >
    <button
      type="button"
      class="px-4 text-gray-400 border-r border-gray-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
      @click.prevent="openDrawer"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt1Icon class="w-6 h-6" />
    </button>
    <div
      class="flex justify-between flex-1 w-full px-4 sm:px-6 lg:mx-auto lg:px-8"
    >
      <div class="flex flex-1">
        <form class="flex w-full md:ml-0" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
              class="absolute inset-y-0 left-0 flex items-center pointer-events-none "
              aria-hidden="true"
            >
              <SearchIcon class="w-5 h-5" />
            </div>
            <input
              id="search-field"
              name="search-field"
              class="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent  focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
              placeholder="Search transactions"
              type="search"
            />
          </div>
        </form>
      </div>
      <div class="flex items-center ml-4 md:ml-6">
        <button
          type="button"
          class="p-1 text-gray-400 bg-white rounded-full  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          <span class="sr-only">View notifications</span>
          <BellIcon class="w-6 h-6" />
        </button>

        <div
          @click.prevent="profileDropdown = !profileDropdown"
          v-click-outside="hide"
          class="relative ml-3"
        >
          <div>
            <button
              type="button"
              class="flex items-center max-w-xs text-sm bg-white rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
              <span
                class="hidden ml-3 text-sm font-medium text-gray-700 lg:block"
                ><span class="sr-only">Open user menu for </span>Emilia
                Birch</span
              >
              <ChevronDownIcon
                class="flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 lg:block"
              />
            </button>
          </div>

          <div
            class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
            v-show="profileDropdown"
          >
            <nuxt-link
              :to="{ name: 'auth-profile' }"
              class="block px-4 py-2 text-sm text-gray-700"
              >Your Profile</nuxt-link
            >
            <a
              @click.prevent="logout"
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapActions } from 'vuex'
import {
  MenuAlt1Icon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from '@vue-hero-icons/outline'

export default {
  data() {
    return {
      profileDropdown: false,
    }
  },
  components: {
    MenuAlt1Icon,
    BellIcon,
    ChevronDownIcon,
    SearchIcon,
  },
  methods: {
    ...mapActions({
      openDrawer: 'drawer/open',
    }),

    hide() {
      this.profileDropdown = false
    },

    async logout() {
      try {
        await this.$auth.logout()

        this.$router.replace({
          name: 'login',
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

