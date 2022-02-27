<template>
  <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
    <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-cyan-700">
      <div class="flex items-center justify-center flex-shrink-0 px-4">
        <img
          class="w-auto h-12"
          src="@/assets/images/dbc-white-logo.svg"
          alt="Easywire logo"
        />
      </div>
      <nav
        class="flex flex-col flex-1 mt-5 overflow-y-auto divide-y  divide-cyan-800"
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
            :to="{ name: 'category' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <CollectionIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Categories
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'topic' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <BookOpenIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Topics
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'region' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <LocationMarkerIcon
              class="w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            Regions
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'tag' }"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
          >
            <TagIcon class="w-6 h-6 mr-4 text-cyan-200" aria-hidden="true" />
            Tags
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
  },
}
</script>


