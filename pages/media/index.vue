  <template>
  <div class="sm:flex">
    <div class="w-full">
      <div class="px-1 mx-auto sm:px-3">
        <div
          class="p-2 my-2 bg-white border border-gray-200 rounded-md  sm:p-3 sm:my-3"
        >
          <div class="flex flex-wrap">
            <div class="w-full">
              <div class="mt-1">
                <div
                  class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer "
                >
                  <div class="space-y-1 text-center">
                    <ImagePlus />
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer  hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <modal class="relative" name="app-image-croping-modal">
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

            <div class="p-2 sm:p-4 lg:p-8">
              <form @submit.prevent="uploadThumbnail">
                <div>
                  <AppLabel class="text-base font-semibold text-green-700"
                    >Image Preview :</AppLabel
                  >
                  <div sm="10">
                    <vue-cropper
                      v-if="temporaryThumb"
                      ref="cropper"
                      :aspect-ratio="600 / 352"
                      :autoCropArea="1"
                      :src="temporaryThumb"
                      @crop="cropThumb"
                      style="
                        width: 100%;
                        max-width: 100%;
                        height: auto;
                        max-height: 560px;
                      "
                    >
                    </vue-cropper>
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
                    class="w-full text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                    >Upload</AppButton
                  >
                </div>
              </form>
            </div>
          </modal>
        </div>

        <div class="p-2 bg-white border border-gray-200 rounded-md sm:p-3">
          <div class="mb-3">
            <input
              type="search"
              placeholder="Searh"
              @keyup="search"
              v-model="searching"
              class="flex-grow w-full h-8 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <div class="p-2 border-2 border-dashed rounded-md sm:p-3">
            <ul role="list" class="grid grid-cols-12 gap-3">
              <li
                v-for="image in images"
                :key="image.id"
                class="relative col-span-6 bg-gray-100  md:col-span-4 2md:col-span-3 2xl:col-span-2"
              >
                <button
                  class="block w-full  group aspect-w-10 aspect-h-7 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  :class="
                    viewSelectedImage == image ? 'ring-2 ring-purple-600' : ''
                  "
                  @click="selectToViewDetails(image)"
                >
                  <img
                    v-if="image.thumb160x84"
                    v-lazy="image.thumb160x84"
                    :alt="image.name"
                    class="object-cover pointer-events-none  group-hover:opacity-75"
                  />
                </button>
                <p class="p-1 text-sm truncate">{{ image.name }}</p>
              </li>
            </ul>
          </div>
          <AppPagination :meta="meta" v-if="meta.last_page > 1" />
        </div>
      </div>
    </div>
    <MediaAside :image="viewSelectedImage" @reloadPage="reloadPage" />
  </div>
</template>

<script>
import { XIcon } from '@vue-hero-icons/outline'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import AppPagination from '~/components/AppPagination.vue'
import AppInput from '~/components/form/AppInput.vue'

export default {
  data() {
    return {
      searching: '',
      meta: {},
      images: [],
      uploading: false,
      isLoading: false,
      temporaryThumb: null,
      thumbnail: null,
      viewSelectedImage: null,
      errors: '',
      form: {
        photo: null,
        name: '',
        path: '',
        location: '',
        source: '',
        comment: '',
        caption: '',
        acceptSize: 1,
        cropX: 0,
        cropY: 0,
        cropWidth: null,
        cropHeight: null,
      },
    }
  },
  components: { VueCropper, XIcon, AppPagination, AppInput },
  mounted() {
    this.getImages()
  },
  watch: {
    '$route.query'(query) {
      this.getImages(query)
    },
  },
  methods: {
    async search(e) {
      console.log(e)
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            search: e.target.value,
          }),
        })
        .catch(() => {})
    },
    selectToViewDetails(image) {
      this.viewSelectedImage = image
    },
    reloadPage() {
      this.getImages()
    },
    hideAppImageCropingModal() {
      this.$modal.hide('app-image-croping-modal')
    },
    async getImages(query = this.$route.query) {
      try {
        let response = await this.$axios
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
        // this.images = response.data
        // this.meta = response.meta
      } catch (e) {}
    },
    async selectingThumbnail(e) {
      if ((this.uploading = true)) {
        this.$modal.show('app-image-croping-modal')

        if (!e || !e.target || !e.target.files || e.target.files.length === 0) {
          return
        }
        this.thumbnail = e.target.files[0]
        const file = e.target.files[0]

        this.temporaryThumb = URL.createObjectURL(file)

        const name = file.name
        const lastDot = name.lastIndexOf('.')

        this.form.name = name.substring(0, lastDot)
        this.form.caption = name.substring(0, lastDot)
        // const ext = name.substring(lastDot + 1);
      }
    },
    hidePreview() {
      this.uploading = false
    },

    cropThumb(event) {
      this.form.cropX = event.detail.x
      this.form.cropY = event.detail.y
      this.form.cropWidth = event.detail.width
      this.form.cropHeight = event.detail.height
    },
    errorMessage() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        icon: 'error',
        title: 'Something wrong!',
      })
    },
    successMessage() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        icon: 'success',
        title: 'News Updated successfully',
      })
    },
    async uploadThumbnail() {
      console.log(this.thumbnail)
      try {
        let formData = new FormData()
        formData.append('thumbnail', this.thumbnail)
        console.log(formData)
        formData.append('name', this.form.name)
        formData.append('path', this.form.path)
        formData.append('location', this.form.location)
        formData.append('source', this.form.source)
        formData.append('comment', this.form.comment)
        formData.append('caption', this.form.caption)
        formData.append('acceptSize', this.form.acceptSize)
        formData.append('cropX', this.form.cropX)
        formData.append('cropY', this.form.cropY)
        formData.append('cropWidth', this.form.cropWidth)
        formData.append('cropHeight', this.form.cropHeight)
        await this.$axios.post(`images`, formData).then(({ data }) => {
          this.successMessage()
          this.getImages()
          this.hideAppImageCropingModal()
        })
      } catch (e) {
        this.errors = e.response.data.errors
        this.errorMessage()
      }
    },
  },
  mounted() {
    if (this.$route.query.search) {
      this.searching = this.$route.query.search
    }
    this.getImages()
  },
}
</script>

<style>
.vm--modal {
  width: 80% !important;
  height: 600px !important;
  top: 50px !important;
  bottom: 0 !important;
  margin: auto !important;
  left: 0 !important;
  right: 0 !important;
  overflow: scroll !important;
}

@media only screen and (max-width: 768px) {
  .vm--modal {
    width: 100% !important;
  }
}
</style>
