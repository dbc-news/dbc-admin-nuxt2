<template>
  <modal name="thumbnailIndexModal">
    <div class="p-4">
      <div class="flex justify-end">
        <XCircleIcon
          class="text-red-600 cursor-pointer"
          @click="hideThumbnailIndexModal"
        />
      </div>
      <div v-if="images.length">
        <div v-for="image in images" :key="image">
          <img :src="image.thumb160x84" alt="img" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import { XCircleIcon } from '@vue-hero-icons/outline'
export default {
  data() {
    return {
      images: [],
    }
  },
  components: {
    XCircleIcon,
  },
  methods: {
    hideThumbnailIndexModal() {
      this.$modal.hide('thumbnailIndexModal')
    },
    testShow() {
      this.$modal.show('thumbnailIndexModal')
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
  max-height: 800px !important;
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
