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
          class="
            p-3
            bg-white
            border-b-0 border-gray-300 border-dashed
            cursor-pointer
            rounded-t-md
          "
          :class="tab === 'thumbnail' ? '-mb-0.5  border-2' : ''"
          @click.prevent="showThumbnails('thumbnail')"
        >
          Thumbnails
        </div>
        <div
          class="
            p-3
            bg-white
            border-b-0 border-gray-300 border-dashed
            cursor-pointer
            rounded-t-md
          "
          :class="tab === 'upload' ? '-mb-0.5  border-2' : ''"
          @click.prevent="showThumbnails('upload')"
        >
          Upload
        </div>
        <div class="flex-grow p-2 pr-0 sm:gap-2 sm:pl-4">
          <input
            type="search"
            placeholder="Searh"
            @keyup="search"
            v-model="searching"
            class="
              flex-grow
              w-full
              h-8
              px-2
              border border-gray-300
              rounded-md
              shadow-sm
              focus:border-red-300
              focus:ring
              focus:ring-red-200
              focus:ring-opacity-50
              focus:outline-none
            "
          />
        </div>
      </div>

      <div
        class="
          grid grid-cols-12
          gap-3
          p-3
          border-2 border-gray-300 border-dashed
          rounded-md rounded-tl-none
        "
        v-show="tab === 'thumbnail'"
      >
        <template v-if="images.length">
          <div
            class="
              relative
              col-span-6
              border border-gray-100
              sm:col-span-4
              md:col-span-3
              lg:col-span-2
              bg-gray-50
            "
            v-for="image in images"
            :key="image.id"
          >
            <input
              type="checkbox"
              :id="image.id"
              :name="image.id"
              :value="image.id"
              :checked="image.id == (selectedThumb ? selectedThumb.id : null)"
              class="absolute top-0 right-0"
              :class="{
                hidden: image.id != (selectedThumb ? selectedThumb.id : null),
              }"
            />
            <div @click.prevent="selectingImage(image)">
              <AppLabel :for="image.id">
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
              </AppLabel>
            </div>
          </div>
        </template>
        <div v-else class="col-span-12">
          <div class="flex justify-center">
            <div class="text-center">
              <p class="text-sm text-gray-600">No images found.</p>
            </div>
          </div>
        </div>
      </div>
      <AppPagination :meta="meta" v-if="meta.last_page > 1" />
      <div
        class="
          p-3
          border-2 border-gray-300 border-dashed
          rounded-md rounded-tl-none
        "
        v-show="tab === 'upload'"
      >
        <div class="flex flex-wrap">
          <div class="w-full">
            <div class="mt-1">
              <div
                class="flex justify-center px-6 pt-5 pb-6 cursor-pointer"
                v-if="!temporaryThumb"
              >
                <div class="space-y-1 text-center">
                  <ImagePlus />
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="
                        relative
                        font-medium
                        text-indigo-600
                        bg-white
                        rounded-md
                        cursor-pointer
                        hover:text-indigo-500
                        focus-within:outline-none
                        focus-within:ring-2
                        focus-within:ring-offset-2
                        focus-within:ring-indigo-500
                      "
                    >
                      <span>Upload a file</span>
                      <input
                        type="file"
                        id="file-upload"
                        name="file-upload"
                        placeholder="Choose a file..."
                        drop-placeholder="Drop file here..."
                        @change="selectingThumbnail"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>

              <div class="p-2 sm:p-4 lg:p-8" v-if="temporaryThumb">
                <form @submit.prevent="uploadThumbnail">
                  <div>
                    <AppLabel class="text-base font-semibold text-green-700"
                      >Image Preview :</AppLabel
                    >
                    <div class="flex justify-center">
                      <img
                        :src="temporaryThumb"
                        alt=""
                        style="max-width: 100%; max-height: 560px"
                      />
                    </div>
                    <AppInputError v-if="errors.thumbnail">
                      {{ errors.thumbnail[0] }}
                    </AppInputError>
                  </div>

                  <div class="my-5">
                    <div sm="2">
                      <AppLabel for="name">Name:</AppLabel>
                    </div>
                    <div sm="10">
                      <AppInput
                        id="name"
                        placeholder="Name"
                        type="text"
                        v-model="form.name"
                      />
                      <AppInputError v-if="errors.name">
                        {{ errors.name[0] }}
                      </AppInputError>
                    </div>
                  </div>

                  <div class="mt-5">
                    <AppButton
                      type="submit"
                      class="
                        w-full
                        text-white
                        bg-red-600
                        hover:bg-red-700
                        focus:ring-red-500
                      "
                      >Upload</AppButton
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
      errors: [],
      images: [],
      meta: {},
      tab: 'thumbnail',
      searching: '',

      uploading: false,
      isLoading: false,
      temporaryThumb: null,
      thumbnail: null,
      viewSelectedImage: null,

      form: {
        photo: null,
        name: '',
      },
    }
  },
  props: {
    selectedThumb: {
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
    selectedThumb(image) {
      this.$emit('selectedImageFromModal', image)
    },

    '$route.query'(query) {
      this.getImages(query)
    },
  },
  methods: {
    statusMessage(type, message) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        icon: type,
        title: message,
      })
    },

    async uploadThumbnail() {
      try {
        let formData = new FormData()
        formData.append('thumbnail', this.thumbnail)
        formData.append('name', this.form.name)

        await this.$axios.post(`admin/images`, formData).then(({ data }) => {
          this.statusMessage('success', 'Thumbnail uploaded successfully')
          this.getImages()
          this.temporaryThumb = null
        })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something wrong')
      }
    },

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
      this.selectedThumb = arg
    },

    hideAppImageIndexModal() {
      this.$modal.hide('app-image-index-modal')
    },

    showAppImageIndexModal() {
      this.$modal.show('app-image-index-modal')
    },

    showThumbnails(option) {
      this.tab = option
    },

    async selectingThumbnail(e) {
      if ((this.uploading = true)) {
        if (!e || !e.target || !e.target.files || e.target.files.length === 0) {
          return
        }
        this.thumbnail = e.target.files[0]
        const file = e.target.files[0]

        this.temporaryThumb = URL.createObjectURL(file)

        const name = file.name
        const lastDot = name.lastIndexOf('.')

        this.form.name = name.substring(0, lastDot)
      }
    },

    async getImages(query = this.$route.query) {
      try {
        await this.$axios
          .$get('admin/images?per-page=12', {
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
