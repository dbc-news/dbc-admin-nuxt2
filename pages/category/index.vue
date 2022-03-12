<template>
  <div>
    <Breadcrumb leading="Categories" trialing="" breadcrumb="Category / list" />

    <div class="p-1 mx-auto sm:p-3 lg:p-8">
      <div class="w-full md:flex md:space-x-3 lg:space-x-8">
        <div class="w-full md:w-4/12">
          <div class="p-2 border-2 border-dashed rounded-md sm:p-6 lg:p-8">
            <h1 class="text-xl font-semibold text-cyan-500">
              Create New Category
            </h1>

            <form @submit.prevent="createCategory">
              <div class="sm:rounded-tl-md sm:rounded-tr-md">
                <div class="w-full py-1 md:py-3">
                  <AppLabel> Name </AppLabel>
                  <input
                    class="w-full border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    placeholder="Name"
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
                  <input
                    class="w-full border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    placeholder="Slug"
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
                  <FormSelect v-model="form.status" id="status" name="status">
                    <option
                      value="draft"
                      v-for="category in treeCategories"
                      :key="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </FormSelect>
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
                  Submit
                </AppButton>
              </div>
            </form>
          </div>
        </div>

        <div class="w-full mt-3 md:mt-0 md:w-8/12">
          <div class="grid grid-cols-12 md:gap-3">
            <div class="col-span-12 md:mt-0">
              <div class="overflow-hidden border-2 border-dashed rounded-md">
                <div>
                  <div
                    class="flex flex-wrap items-center justify-between w-full p-2 bg-white border-b border-gray-200  sm:px-6 lg:px-8 sm:py-3 lg:py-4"
                  >
                    <div class="flex-grow">
                      <div class="flex mt-1">
                        <div
                          class="relative flex items-stretch flex-grow  focus-within:z-10"
                        >
                          <input
                            type="search"
                            placeholder="Searh"
                            @keyup="search"
                            v-model="searching"
                            class="flex-grow w-full h-8 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <CategoryItem :treeCategories="treeCategories" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {{ categories }}
      <AppCategoryEditModal
        :selectedCategory="selectedCategoryFromCategoryPage"
        @updatedFromCategoryModal="reloadCategories"
      />
    </div>
  </div>
</template>
<script>
import { UserIcon, ClockIcon } from '@vue-hero-icons/outline'
export default {
  middleware: ['authIndent'],

  data() {
    return {
      errors: [],
      categories: [],
      treeCategories: [],
      meta: {},

      searching: '',
      selectedCategoryFromCategoryPage: null,

      form: {
        name: '',
        slug: '',
      },
    }
  },

  components: {
    UserIcon,
    ClockIcon,
  },
  mounted() {
    this.getTreeCategories()
  },

  watch: {
    '$route.query'(query) {
      this.getTreeCategories(query)
    },
  },
  async asyncData({ app, error }) {
    try {
      let response = await app.$axios.$get('categories')
      return {
        categories: response.data,
      }
    } catch (e) {
      //
    }
  },
  methods: {
    async search(e) {
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            search: e.target.value,
          }),
        })
        .catch(() => {})
    },

    reloadCategories() {
      this.getTreeCategories()
    },

    async deleteCategory(categorySlug) {
      try {
        await this.$axios
          .delete(`categories/${categorySlug}`)
          .then(({ data }) => {
            this.getTreeCategories()
            this.statusMessage('success', 'Category deleted successfully')
          })
      } catch (error) {
        if (error.response.status === 500) {
          this.statusMessage('error', 'Server Error')
        } else {
          this.statusMessage('error', 'Something went wrong')
        }
      }
    },

    async editCategory(category) {
      this.selectedCategoryFromCategoryPage = category
      this.$modal.show('app-category-edit-modal')
    },

    async createCategory() {
      console.log(this.form)
      try {
        await this.$axios.post(`categories`, this.form).then(({ data }) => {
          this.statusMessage('success', 'Category uploaded successfully')
          this.getTreeCategories()
          this.formClear()
        })
      } catch (e) {
        this.errors = e.response.data.errors
        this.statusMessage('error', 'Something wrong')
      }
    },

    formClear() {
      this.form = {
        name: '',
        slug: '',
      }
    },

    async getTreeCategories(query = this.$route.query) {
      try {
        await this.$axios
          .$get('categories?per-page=7', {
            params: {
              page: query.page,
              ...query,
            },
          })
          .then((response) => {
            this.treeCategories = response.data
            this.meta = response.meta
          })
      } catch (e) {}
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
  },

  mounted() {
    if (this.$route.query.search) {
      this.searching = this.$route.query.search
    }
    this.getTreeCategories()
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


