<template>
  <div class="bg-white shadow">
    <div class="px-4 sm:px-6 lg:mx-auto lg:px-8 lg:border-t lg:border-gray-200">
      <div class="flex py-6 md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <!-- Profile -->
          <div class="flex items-center">
            <!-- <img
              class="hidden w-16 h-16 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
              alt=""
            /> -->
            <div>
              <div class="flex items-center">
                <!-- <img
                  class="w-16 h-16 rounded-full sm:hidden"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                  alt=""
                /> -->
                <h1
                  class="text-2xl font-bold leading-7 text-gray-900  sm:leading-9 sm:truncate"
                >
                  {{ leading }}
                </h1>
              </div>
              <dl class="flex mt-1">
                <dd
                  class="flex items-center text-sm font-medium text-gray-500 capitalize  sm:mr-6"
                >
                  <NewspaperIcon
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {{ breadcrumb }}
                </dd>
                <dt class="sr-only">Account status</dt>
              </dl>
            </div>
          </div>
        </div>
        <div class="flex mt-6 space-x-3 md:mt-0 md:ml-4" v-if="trialing">
          <nuxt-link :to="link()">
            <AppButton
              class="text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
            >
              {{ trialing }}
            </AppButton>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NewspaperIcon } from '@vue-hero-icons/outline'

export default {
  props: {
    leading: {
      required: false,
      type: String,
      default: null,
    },
    trialing: {
      required: false,
      type: String,
      default: null,
    },
    href: {
      required: false,
      type: String | Object,
      default: '#',
    },
    breadcrumb: {
      required: false,
      type: String,
      default: null,
    },
  },
  components: {
    NewspaperIcon,
  },
  methods: {
    link() {
      return this.href ? this.href : '/'
    },
  },
}
</script>
