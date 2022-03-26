<template>
  <modal class="relative" name="app-category-edit-modal">
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
        @click="hideCategoyEditModal"
      />
    </div>

    <div class="p-1 mx-auto sm:p-3">
      <div class="flex items-center justify-center">
        <div class="w-full mt-8 sm:mt-28 md:w-8/12">
          <div class="p-2 border-2 border-dashed rounded-md lg:p-8">
            <h1 class="text-xl font-semibold text-red-500">Edit Category</h1>
            <form @submit.prevent="updateCateogy">
              <div class="sm:rounded-tl-md sm:rounded-tr-md">
                <div class="w-full py-1 md:py-3">
                  <AppLabel> Name </AppLabel>
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
                  <AppLabel> Parent </AppLabel>
                  <multiselect
                    v-model="selectedCatParent"
                    placeholder="Search category"
                    label="name"
                    track-by="uuid"
                    :options="categoriesFormCatPage"
                    :hideSelected="true"
                    :categoryable="true"
                  ></multiselect>
                  <AppInputError v-if="errors.parent_id">
                    {{ errors.parent_id[0] }}
                  </AppInputError>
                </div>
              </div>

              <div
                class="
                  flex
                  items-center
                  mt-3
                  mb-1
                  text-right
                  sm:rounded-bl-md sm:rounded-br-md
                "
              >
                <AppButton
                  class="
                    text-white
                    vertical-gradient
                    hover:bg-red-700
                    focus:ring-red-500
                  "
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
import Multiselect from 'vue-multiselect'

export default {
  data() {
    return {
      selectedCatParent: null,
      errors: [],
      form: {
        name: '',
        slug: '',
        parent_id: null,
      },
    }
  },

  watch: {
    selectedCatFromCatPage(category) {
      if (category) {
        this.form.name = category.name
        this.form.slug = category.slug
        this.form.parent_id = category.parent_id
      }
      this.setSelectedCatParent()
    },

    selectedCatParent(category) {
      if (category) {
        this.form.parent_id = category.id
      }
    },
  },

  props: {
    selectedCatFromCatPage: {
      required: true,
      type: Object | null,
    },
    categoriesFormCatPage: {
      required: true,
      type: Array,
    },
  },

  components: {
    XIcon,
    Multiselect,
  },

  methods: {
    hideCategoyEditModal() {
      this.$modal.hide('app-category-edit-modal')
    },

    showCategoryEditModal() {
      this.$modal.show('app-category-edit-modal')
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

    async updateCateogy() {
      try {
        await this.$axios
          .patch(
            `admin/categories/${this.selectedCatFromCatPage.slug}`,
            this.form
          )
          .then(({ data }) => {
            this.statusMessage('success', 'Category updated successfully')
            this.hideCategoyEditModal()
            this.$emit('updatedFromCategoryModal')
          })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something wrong')
      }
    },

    setSelectedCatParent() {
      let matchedCat = this.categoriesFormCatPage.filter(
        (category) => category.id === this.selectedCatFromCatPage.id
      )
      if (matchedCat.length > 0) {
        this.selectedCatParent = matchedCat[0].parent
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
