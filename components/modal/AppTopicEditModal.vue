<template>
  <modal class="relative" name="app-topic-edit-modal">
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
        @click="hideTopicEditModal"
      />
    </div>
    <div class="p-1 mx-auto sm:p-3">
      <div class="flex items-center justify-center">
        <div class="w-full mt-8 sm:mt-28 md:w-8/12">
          <div class="p-2 border-2 border-dashed rounded-md lg:p-8">
            <h1 class="text-xl font-semibold text-cyan-500">Edit Topic</h1>
            <form @submit.prevent="updateTopic">
              <div class="sm:rounded-tl-md sm:rounded-tr-md">
                <div class="w-full py-1 md:py-3">
                  <AppLable> Name </AppLable>
                  <AppInput
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    v-model="form.name"
                  />
                  <AppInputError v-if="errors.name">
                    {{ errors.name[0] }}
                  </AppInputError>
                </div>
                <div class="w-full py-1 md:py-3">
                  <AppLable> Slug </AppLable>
                  <AppInput
                    placeholder="Slug"
                    type="text"
                    id="slug"
                    name="slug"
                    v-model="form.slug"
                    class="cursor-not-allowed"
                    disabled="disabled"
                  />
                  <AppInputError v-if="errors.slug">
                    {{ errors.slug[0] }}
                  </AppInputError>
                </div>
              </div>

              <div
                class="flex items-center mt-3 mb-1 text-right  sm:rounded-bl-md sm:rounded-br-md"
              >
                <AppButton
                  class="text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
                >
                  Update
                </AppButton>
              </div>
            </form>
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
      errors: [],
      form: {
        name: '',
        slug: '',
      },
    }
  },

  props: {
    selectedTopic: {
      required: false,
      type: Object,
      default: null,
    },
  },

  components: {
    XIcon,
  },

  watch: {
    selectedTopic(topic) {
      if (topic) {
        this.form.name = topic.name
        this.form.slug = topic.slug
      }
    },
  },

  methods: {
    hideTopicEditModal() {
      this.$modal.hide('app-topic-edit-modal')
    },

    showTopicEditModal() {
      this.$modal.show('app-topic-edit-modal')
    },

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

    async updateTopic() {
      try {
        await this.$axios
          .patch(`admin/topics/${this.selectedTopic.slug}`, this.form)
          .then(({ data }) => {
            this.statusMessage('success', 'Topic uploaded successfully')
            this.hideTopicEditModal()
            this.$emit('updatedFromTopicModal')
          })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something wrong')
      }
    },
  },
}
</script>

<style>
.vm--modal {
  width: 80% !important;
  height: 600px !important;
}

@media only screen and (max-width: 768px) {
  .vm--modal {
    height: 400px !important;
  }
}
</style>
