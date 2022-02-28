<template>
  <div>
    <Breadcrumb
      leading="Tags"
      trialing="New Tag"
      :href="{ name: 'tag-create' }"
      breadcrumb="Tag / list"
    />
    <div class="px-4 py-3 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div
            class="overflow-hidden border-b border-gray-200 shadow  sm:rounded-lg"
          >
            <div>
              <div>
                <div class="w-full mr-2">
                  <div class="w-full mb-1 rounded-md">
                    <input
                      class="flex-grow w-full h-10 px-2 overflow-hidden border border-gray-300 rounded-md  focus:border-indigo-300 focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                      type="search"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div
                  class="justify-between p-4 bg-white border-t border-gray-200  sm:flex group"
                >
                  <div class="flex flex-wrap items-center w-full">
                    <div
                      class="font-solimanlipi"
                      v-for="tag in tags"
                      :key="tag.id"
                    >
                      <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 mt-1 mr-1 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm  hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25"
                      >
                        {{ tag.name }}
                      </button>
                    </div>

                    <!-- <div class="py-2 text-center">No Tag listed yet.</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [],
    }
  },
  async asyncData({ app, error }) {
    try {
      let response = await app.$axios.get(`tags`)
      return {
        tags: response.data.data,
      }
    } catch (e) {
      error({ statusCode: e.response.status })
    }
  },
}
</script>
