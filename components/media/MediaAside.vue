<template>
  <aside class="px-1 mt-3 sm:mt-0">
    <div
      class="
        w-full
        mx-auto
        overflow-y-auto
        bg-white
        border-l border-gray-200
        rounded-md
        sm:rounded-none sm:w-68
        md:w-72
      "
    >
      <div
        class="h-full sm:min-h-[850px] p-2 pb-16 space-y-6 sm:p-3"
        v-if="image && aside"
      >
        <form @submit.prevent="updateThumbnail(image.id)">
          <div>
            <div class="block w-full overflow-hidden aspect-w-10 aspect-h-7">
              <img
                v-if="image.thumb600x314"
                v-lazy="image.thumb600x314"
                :alt="image.name"
                class="object-cover"
              />
            </div>
            <div class="w-full mt-4">
              <AppInput
                placeholder="name"
                type="text"
                id="name"
                name="name"
                class="h-8"
                v-model="form.name"
              />
              <AppInputError v-if="errors.name">
                {{ errors.name[0] }}
              </AppInputError>
              <!-- <p class="text-sm font-medium text-gray-500">3.9 MB</p> -->
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Information</h3>
            <dl
              class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
            >
              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Uploaded by</dt>
                <!-- <dd class="text-gray-900">User</dd> -->
              </div>

              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Created At:</dt>
                <dd class="text-sm text-gray-900">
                  {{ image.formatted_date_time }}
                </dd>
              </div>

              <div class="flex justify-between py-3 text-sm font-medium">
                <dt class="text-gray-500">Dimensions</dt>
                <!-- <dd class="text-gray-900">4032 x 3024</dd> -->
              </div>
            </dl>
          </div>

          <div class="flex mt-5">
            <button
              type="submit"
              class="
                flex-1
                px-4
                py-2
                text-sm
                font-medium
                text-white
                bg-indigo-600
                border border-transparent
                rounded-md
                shadow-sm
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              Update
            </button>
            <button
              type="button"
              class="
                flex-1
                px-4
                py-2
                ml-3
                text-sm
                font-medium
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                shadow-sm
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              @click="deleteImage(image.id)"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
      <div class="inset-y-0 w-full sm:fixed" v-else>
        <div class="relative flex flex-col flex-grow h-full bg-white">
          <div
            class="
              w-full
              border-2 border-gray-200 border-dashed
              sm:mb-4 sm:absolute
              top-16
            "
          >
            <div
              class="
                flex
                items-center
                px-4
                m-auto
                text-base
                font-semibold
                text-green-500
                sm:h-[850px]
                h-20
              "
            >
              <div class="sm:-mt-60">Select an image to view and edit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script >
export default {
  data() {
    return {
      errors: '',
      aside: true,
      form: {
        name: this.image ? this.image.name : null,
      },
    }
  },
  watch: {
    image: function (val) {
      this.form.name = val.name
    },
  },
  props: {
    image: {
      required: false,
      type: Object,
      default: null,
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

    async updateThumbnail(thumbnailId) {
      try {
        await this.$axios
          .patch(`images/${thumbnailId}`, this.form)
          .then(({ data }) => {
            this.$emit('reloadPage')
            this.statusMessage('success', 'Thumbnail updated successfully')
            this.errors = ''
          })
      } catch (e) {
        ;(this.errors = e.response.errors),
          this.statusMessage('error', 'Something went wrong')
      }
    },
    async deleteImage(thumbnailId) {
      try {
        await this.$axios.delete(`images/${thumbnailId}`).then(({ data }) => {
          this.$emit('reloadPage')
          this.statusMessage('success', 'Thumbnail deleted successfully')
          this.aside = false
          this.errors = ''
        })
      } catch (error) {
        if (error.response.status === 500) {
          this.statusMessage('error', 'Server Error')
        } else {
          this.statusMessage('error', 'Something went wrong')
        }
      }
    },
  },
}
</script>
