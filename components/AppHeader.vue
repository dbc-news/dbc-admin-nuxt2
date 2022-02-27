<template>
  <div
    class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200  lg:border-none"
  >
    <button
      type="button"
      class="px-4 text-gray-400 border-r border-gray-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
      @click="open = true"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        x-description="Heroicon name: outline/menu-alt-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h8m-8 6h16"
        ></path>
      </svg>
    </button>
    <!-- Search bar -->
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
              <svg
                class="w-5 h-5"
                x-description="Heroicon name: solid/search"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
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
          <svg
            class="w-6 h-6"
            x-description="Heroicon name: outline/bell"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div
          x-data="Components.menu({ open: false })"
          x-init="init()"
          @keydown.escape.stop="open = false"
          class="relative ml-3"
        >
          <div>
            <button
              type="button"
              class="flex items-center max-w-xs text-sm bg-white rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
              id="user-menu-button"
              x-ref="button"
              @click="onButtonClick()"
              @keyup.space.prevent="onButtonEnter()"
              @keydown.enter.prevent="onButtonEnter()"
              aria-expanded="false"
              aria-haspopup="true"
              x-bind:aria-expanded="open.toString()"
              @keydown.arrow-up.prevent="onArrowUp()"
              @keydown.arrow-down.prevent="onArrowDown()"
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
              <svg
                class="flex-shrink-0 hidden w-5 h-5 ml-1 text-gray-400 lg:block"
                x-description="Heroicon name: solid/chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            x-show="open"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
            x-ref="menu-items"
            x-description="Dropdown menu, show/hide based on menu state."
            x-bind:aria-activedescendant="activeDescendant"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
            @keydown.arrow-up.prevent="onArrowUp()"
            @keydown.arrow-down.prevent="onArrowDown()"
            @keydown.tab="open = false"
            @keydown.enter.prevent="open = false"
            @keyup.space.prevent="open = false"
            style="display: none"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              x-state:on="Active"
              x-state:off="Not Active"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0"
              @click="open = false"
              >Your Profile</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1"
              @click="open = false"
              >Settings</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
              @click="open = false"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import { MenuAlt1Icon } from '@vue-hero-icons/outline'

export default {
  components: {
    MenuAlt1Icon,
    AppNavbar,
  },
  // setup() {
  //   const isOpen = ref(false)
  //   return {
  //     isOpen,
  //   }
  // },
}
</script>

