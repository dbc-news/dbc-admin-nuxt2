<template>
  <modal class="relative" name="app-image-iodal">
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
        @click="hideAppImageModal"
      />
    </div>
    <div class="p-2 sm:gap-2 sm:p-4 lg:p-8">
      <div class="grid grid-cols-12 gap-3" v-if="images.length">
        <div
          class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
          v-for="image in images"
          :key="image.id"
        >
          <img :src="image.thumb160x84" class="w-full h-auto" alt="img" />
          <div>
            <p>{{ image.name }}</p>
            <p><AppInput type="text" :value="image.original" /></p>
            <p>{{ image.created_at }}</p>
          </div>
        </div>
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
    }
  },
  components: {
    XIcon,
  },
  methods: {
    hideAppImageModal() {
      this.$modal.hide('app-image-iodal')
    },
    testShow() {
      this.$modal.show('app-image-iodal')
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
    this.testShow(), this.getImages()
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
