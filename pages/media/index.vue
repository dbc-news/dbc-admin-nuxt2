  <template>
  <div class="sm:flex">
    <div class="w-full">
      <div class="px-2 mx-auto sm:px-4 lg:px-8">
        <div class="p-4 mt-8 mb-3 bg-white border rounded-md shadow-sm">
          <form @submit.prevent="uploadThumbnail">
            <div class="flex flex-wrap" v-if="!uploading">
              <div class="w-full">
                <div class="mt-1">
                  <!-- <button class="mt-3 text-blue-600 underline">dfd</button> -->
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

            <div class="relative" v-else>
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
                  @click="hidePreview"
                />
              </div>
              <div class="my-1">
                <div sm="2">
                  <AppLabel for="caption">Preview:</AppLabel>
                </div>
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

              <div class="my-1">
                <div sm="2">
                  <AppLabel for="caption">Caption:</AppLabel>
                </div>
                <div sm="10">
                  <AppInput
                    id="caption"
                    placeholder="Caption"
                    type="text"
                    v-model="form.caption"
                  />
                  <AppInputError v-if="errors.caption">
                    {{ errors.caption[0] }}
                  </AppInputError>
                </div>
              </div>

              <!-- <b-row class="my-1">
                <b-col sm="2">
                  <label for="name">Name:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="name"
                    type="text"
                    v-model="form.name"
                  ></b-form-input>
                  <span class="help-block" v-if="errors.name">{{
                    errors.name[0]
                  }}</span>
                </b-col>
              </b-row> -->

              <!-- <b-row class="my-1">
                <b-col sm="2">
                  <label for="source">Source:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="source"
                    type="text"
                    v-model="form.source"
                  ></b-form-input>
                  <span class="help-block" v-if="errors.source">{{
                    errors.source[0]
                  }}</span>
                </b-col>
              </b-row> -->

              <!-- <b-row class="my-1">
                <b-col sm="2">
                  <label for="path">Path:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="path"
                    type="text"
                    v-model="form.path"
                  ></b-form-input>
                  <span class="help-block" v-if="errors.path">{{
                    errors.path[0]
                  }}</span>
                </b-col>
              </b-row> -->

              <!-- <b-row class="my-1">
                <b-col sm="2">
                  <label for="location">Location:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="location"
                    type="text"
                    v-model="form.location"
                  ></b-form-input>
                  <span class="help-block" v-if="errors.location">{{
                    errors.location[0]
                  }}</span>
                </b-col>
              </b-row> -->

              <!-- <b-row class="my-1">
                <b-col sm="2">
                  <label for="comment">Comment:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="comment"
                    placeholder="Enter comments..."
                    rows="3"
                    max-rows="6"
                    v-model="form.comment"
                  ></b-form-textarea>
                  <span class="help-block" v-if="errors.comment">{{
                    errors.comment[0]
                  }}</span>
                </b-col>
              </b-row> -->
              <div class="col-span-12 mt-3">
                <AppButton
                  type="submit"
                  class="w-full text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                  >Submit</AppButton
                >
              </div>
            </div>
          </form>
        </div>

        <div class="">
          <ul role="list" class="grid grid-cols-12 gap-3">
            <li
              v-for="image in images"
              :key="image.id"
              class="relative col-span-6 md:col-span-4 2md:col-span-3"
            >
              <div
                class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
              >
                <img
                  :src="image.original"
                  alt=""
                  class="object-cover pointer-events-none  group-hover:opacity-75"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-96">
      <aside
        class="w-full px-2 pt-3 mx-auto overflow-y-auto bg-white border-l border-gray-200  sm:px-4 lg:px-8"
      >
        <div class="pb-16 space-y-6">
          <div>
            <div
              class="block w-full overflow-hidden rounded-lg  aspect-w-10 aspect-h-7"
            >
              <img
                src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                alt=""
                class="object-cover"
              />
            </div>
            <div class="flex items-start justify-between mt-4">
              <div>
                <h2 class="text-lg font-medium text-gray-900">
                  <span class="sr-only">Details for </span>IMG_4985.HEIC
                </h2>
                <p class="text-sm font-medium text-gray-500">3.9 MB</p>
              </div>
              <button
                type="button"
                class="flex items-center justify-center w-8 h-8 ml-4 text-gray-400 bg-white rounded-full  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <svg
                  class="w-6 h-6"
                  x-description="Heroicon name: outline/heart"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span class="sr-only">Favorite</span>
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Information</h3>
            <dl
              class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200 "
            >
              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Uploaded by</dt>
                <dd class="text-gray-900">Marie Culver</dd>
              </div>

              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Created</dt>
                <dd class="text-gray-900">June 8, 2020</dd>
              </div>

              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Last modified</dt>
                <dd class="text-gray-900">June 8, 2020</dd>
              </div>

              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Dimensions</dt>
                <dd class="text-gray-900">4032 x 3024</dd>
              </div>

              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Resolution</dt>
                <dd class="text-gray-900">72 x 72</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Description</h3>
            <div class="flex items-center justify-between mt-2">
              <p class="text-sm italic text-gray-500">
                Add a description to this image.
              </p>
              <button
                type="button"
                class="flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <svg
                  class="w-5 h-5"
                  x-description="Heroicon name: solid/pencil"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  ></path>
                </svg>
                <span class="sr-only">Add description</span>
              </button>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Shared with</h3>
            <ul
              role="list"
              class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200 "
            >
              <li class="flex items-center justify-between py-3">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=1024&amp;h=1024&amp;q=80"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <p class="ml-4 text-sm font-medium text-gray-900">
                    Aimee Douglas
                  </p>
                </div>
                <button
                  type="button"
                  class="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Remove<span class="sr-only"> Aimee Douglas</span>
                </button>
              </li>

              <li class="flex items-center justify-between py-3">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixqx=oilqXxSqey&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <p class="ml-4 text-sm font-medium text-gray-900">
                    Andrea McMillan
                  </p>
                </div>
                <button
                  type="button"
                  class="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md  hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Remove<span class="sr-only"> Andrea McMillan</span>
                </button>
              </li>

              <li class="flex items-center justify-between py-2">
                <button
                  type="button"
                  class="flex items-center p-1 -ml-1 bg-white rounded-md  group focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span
                    class="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full "
                  >
                    <svg
                      class="w-5 h-5"
                      x-description="Heroicon name: solid/plus-sm"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="ml-4 text-sm font-medium text-indigo-600  group-hover:text-indigo-500"
                    >Share</span
                  >
                </button>
              </li>
            </ul>
          </div>
          <div class="flex">
            <button
              type="button"
              class="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download
            </button>
            <button
              type="button"
              class="flex-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { XIcon } from '@vue-hero-icons/outline'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
  data() {
    return {
      images: [],
      uploading: false,
      isLoading: false,
      temporaryThumb: null,
      thumbnail: null,
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
  components: { VueCropper, XIcon },
  // async asyncData({ app, error }) {
  //   try {
  //     let response = await app.$axios.$get('images')
  //     return {
  //       images: response.data,
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  mounted() {
    this.getImages()
  },
  methods: {
    async getImages() {
      try {
        let response = await this.$axios.$get('images')
        this.images = response.data
      } catch (e) {}
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
          this.uploading = false
        })
      } catch (e) {
        this.errors = e.response.data.errors
        this.errorMessage()
      }
    },
  },
}
</script>


