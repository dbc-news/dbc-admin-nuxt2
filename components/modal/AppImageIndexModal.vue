<template>
  <modal class="relative" name="app-image-index-modal">
    <div class="absolute top-2 right-2">
      <XIcon
        class="
          w-5
          h-5
          text-red-600
          border border-red-500
          rounded-full
          cursor-pointer
          p-0.5
        "
        @click="hideAppImageIndexModal"
      />
    </div>

    <div class="px-2 pt-8 sm:gap-2 sm:px-4">
      <div class="flex">
        <div
          class="p-3 bg-white border-b-0 border-gray-300 border-dashed cursor-pointer  rounded-t-md"
          :class="tab === 'thumbnail' ? '-mb-0.5  border-2' : ''"
          @click.prevent="showThumbnails('thumbnail')"
        >
          Thumbnails
        </div>
        <!-- <div
          class="p-3 bg-white border-b-0 border-gray-300 border-dashed cursor-pointer rounded-t-md"
          :class="tab === 'upload' ? '-mb-0.5  border-2' : ''"
          @click.prevent="showThumbnails('upload')"
        >
          Upload
        </div> -->
        <div class="flex-grow p-2 pr-0 sm:gap-2 sm:pl-4">
          <input
            type="search"
            placeholder="Searh"
            @keyup="search"
            v-model="searching"
            class="flex-grow w-full h-8 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 focus:outline-none"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-12 gap-3 p-3 border-2 border-gray-300 border-dashed rounded-md rounded-tl-none "
        v-if="images.length"
        v-show="tab === 'thumbnail'"
      >
        <div
          class="relative col-span-6 border border-gray-100  sm:col-span-4 md:col-span-3 lg:col-span-2 bg-gray-50"
          v-for="image in images"
          :key="image.id"
        >
          <input
            type="checkbox"
            :id="image.id"
            :name="image.id"
            :value="image.id"
            :checked="image.id == (thumbnail ? thumbnail.id : null)"
            class="absolute top-0 right-0"
            :class="{
              hidden: image.id != (thumbnail ? thumbnail.id : null),
            }"
          />
          <div @click.prevent="selectingImage(image)">
            <label :for="image.id">
              <img
                v-if="image.thumb160x84"
                v-lazy="image.thumb160x84"
                :alt="image.name"
                class="w-full h-auto"
              />
              <div class="px-1 py-2">
                <p class="text-sm tracking-wider truncate">
                  {{ image.name }}
                </p>
                <p class="py-1">
                  <AppInput
                    type="text"
                    class="py-1 text-xs h-7"
                    :value="image.thumb160x84"
                  />
                </p>
                <p class="text-xs tracking-wider truncate">
                  {{ image.formatted_date_time }}
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <AppPagination :meta="meta" v-if="meta.last_page > 1" />
      <div
        class="p-3 border-2 border-gray-300 border-dashed rounded-md rounded-tl-none "
        v-show="tab === 'upload'"
      >
        upload
      </div>
    </div>
  </modal>
</template>

<script>
import { XIcon } from '@vue-hero-icons/outline'
import AppPagination from '../AppPagination.vue'
export default {
  data() {
    return {
      images: [],
      tab: 'thumbnail',
      meta: {},
      searching: '',
    }
  },
  props: {
    thumbnail: {
      required: false,
      type: Object,
      default: null,
    },
  },
  components: {
    XIcon,
    AppPagination,
  },
  watch: {
    thumbnail(image) {
      this.$emit('selectedImageFromModal', image)
    },

    '$route.query'(query) {
      this.getImages(query)
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

    selectingImage(arg) {
      this.thumbnail = arg
    },

    hideAppImageIndexModal() {
      this.$modal.hide('app-image-index-modal')
    },
    shoeAppImageIndexModal() {
      this.$modal.show('app-image-index-modal')
    },

    showThumbnails(option) {
      this.tab = option
    },

    async getImages(query = this.$route.query) {
      try {
        await this.$axios
          .$get('images?per-page=12', {
            params: {
              page: query.page,
              ...query,
            },
          })
          .then((response) => {
            this.images = response.data
            this.meta = response.meta
          })
      } catch (e) {}
    },
  },

  mounted() {
    this.getImages()
    // this.shoeAppImageIndexModal()
  },
}
</script>
<style>
.vm--modal {
  width: 80% !important;
  height: 800px !important;
  top: 50px !important;
  bottom: 0 !important;
  margin: auto !important;
  left: 0 !important;
  right: 0 !important;
}

@media only screen and (max-width: 768px) {
  .vm--modal {
    width: 100% !important;
  }
}
</style>
