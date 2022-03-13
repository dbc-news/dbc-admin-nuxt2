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
    {{ selectedCatFromCatPage }}
    <br />
    parent: {{ selectedCatFromCatPage ? selectedCatFromCatPage.parent : null }}
    <div class="p-1 mx-auto sm:p-3">
      <div class="flex items-center justify-center">
        <div class="w-full mt-8 sm:mt-28 md:w-8/12">
          <div class="p-2 border-2 border-dashed rounded-md lg:p-8">
            <h1 class="text-xl font-semibold text-cyan-500">
              Edit Category {{ selectedCatParent }}
            </h1>
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
                  <AppLabel> Slug </AppLabel>
                  <AppInput
                    placeholder="Slug"
                    type="text"
                    id="slug"
                    name="slug"
                    v-model="form.slug"
                  />
                  <AppInputError v-if="errors.slug">
                    {{ errors.slug[0] }}
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
      }
      this.filteredCategories()
    },
    selectedCatParent(category) {
      this.form.parent_id = this.selectedCatParent.id
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

    formValue() {
      this.form.name = selectedCatFromCatPage.name
      this.form.slug = selectedCatFromCatPage.slug
      this.form.parent_id = selectedCatFromCatPage.parent
        ? selectedCatFromCatPage.parent_id
        : null
      this.selectedCatParent = this.selectedCatFromCatPage.parent ?? null
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
      console.log(this.form)
      // try {
      //   await this.$axios
      //     .patch(`categories/${this.selectedCatFromCatPage.slug}`, this.form)
      //     .then(({ data }) => {
      //       this.statusMessage('success', 'Category updated successfully')
      //       this.hideCategoyEditModal()
      //       this.$emit('updatedFromCategoryModal')
      //     })
      // } catch (e) {
      //   this.errors = e.response.data.errors
      //   this.statusMessage('error', 'Something wrong')
      // }
    },
    filteredCategories() {
      let parent = this.categoriesFormCatPage.filter((movie) => movie.id === 1)
      console.log(parent[0].id)
      // this.selectedCatParent = this.selectedCatFromCatPage.parent ?? null
    },
  },

  mounted() {
    if (this.selectedCatFromCatPage) {
      this.formValue()
    }
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
