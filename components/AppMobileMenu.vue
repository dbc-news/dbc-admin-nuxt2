<template>
  <div
    class="fixed inset-0 z-40 flex transition duration-1000 ease-in-out delay-1000  lg:hidden"
  >
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

    <div
      class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4  bg-cyan-700"
    >
      <div class="absolute top-0 right-0 pt-2 -mr-12">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 ml-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          @click="$emit('toggleDrawer')"
        >
          <span class="sr-only">Close sidebar</span>
          <svg
            class="w-6 h-6 text-white"
            x-description="Heroicon name: outline/x"
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div class="flex items-center flex-shrink-0 px-4">
        <img
          class="w-auto h-8"
          src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
          alt="Easywire logo"
        />
      </div>
      <nav
        class="flex-shrink-0 h-full mt-5 overflow-y-auto divide-y  divide-cyan-800"
        aria-label="Sidebar"
      >
        <div class="px-2 space-y-1">
          <nuxt-link
            to="/"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <NewspaperIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Articles
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'categories' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <CollectionIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Categories
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'topics' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <BookOpenIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Topics
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'regions' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <LocationMarkerIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Regions
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'tags' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <TagIcon class="w-6 h-6 mr-4 text-cyan-200" aria-hidden="true" />
            Tags
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'media' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <DatabaseIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Media
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'users' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <UserGroupIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Users
          </nuxt-link>
        </div>
        <div class="pt-6 mt-6">
          <div class="px-2 space-y-1">
            <a
              class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
            >
              <CogIcon class="w-6 h-6 mr-4 text-cyan-200" aria-hidden="true" />
              Settings
            </a>

            <a
              href="#"
              class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
            >
              <QuestionMarkCircleIcon
                class="w-6 h-6 mr-4 text-cyan-200"
                aria-hidden="true"
              />
              Help
            </a>

            <a
              href="#"
              class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
            >
              <ShieldCheckIcon
                class="w-6 h-6 mr-4 text-cyan-200"
                aria-hidden="true"
              />
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
  </div>
</template>
<script>
import {
  CogIcon,
  TagIcon,
  CollectionIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  UserGroupIcon,
} from '@vue-hero-icons/outline'
import { LocationMarkerIcon, NewspaperIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    CogIcon,
    TagIcon,
    LocationMarkerIcon,
    CollectionIcon,
    NewspaperIcon,
    BookOpenIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    DatabaseIcon,
    UserGroupIcon,
  },
}
</script>


