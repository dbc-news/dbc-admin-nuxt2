<template>
  <modal class="relative" name="app-image-modal">
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
        @click="hideAppImageCropingModal"
      />
    </div>

    <div class="p-2 sm:gap-2 sm:p-4 lg:p-8">
      <div class="flex">
        <div
          class="p-3 bg-white border-b-0 border-gray-300 border-dashed cursor-pointer  rounded-t-md"
          :class="tab === 'thumbnail' ? '-mb-0.5  border-2' : ''"
          @click.prevent="showThumbnails('thumbnail')"
        >
          Thumbnails
        </div>
        <div
          class="p-3 bg-white border-b-0 border-gray-300 border-dashed cursor-pointer  rounded-t-md"
          :class="tab === 'upload' ? '-mb-0.5  border-2' : ''"
          @click.prevent="showThumbnails('upload')"
        >
          Upload
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
                <p class="text-sm tracking-wider truncate">{{ image.name }}</p>
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
export default {
  data() {
    return {
      images: [],
      // thumbnail: null,
      tab: 'thumbnail',
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
  },
  watch: {
    thumbnail(image) {
      this.$emit('selectedImageFromModal', image)
    },
  },
  methods: {
    selectingImage(arg) {
      this.thumbnail = arg
    },
    hideAppImageCropingModal() {
      this.$modal.hide('app-image-index-modal')
    },

    showThumbnails(option) {
      this.tab = option
    },
    async getImages(page = this.$route.query.page, query = this.$route.query) {
      await this.$axios
        .$get(`images`, {
          params: {
            page,
            ...query,
          },
        })
        .then((response) => {
          this.images = response.data
        })
    },
  },
  mounted() {
    this.getImages()
    this.$modal.show('app-image-croping-modal')
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
