<template>
  <div class="">
    <Breadcrumb
      leading="Articles"
      trialing="Articles"
      :href="{ name: 'index' }"
      breadcrumb="Articles / Create"
    />
    <form @submit.prevent="articleUpdate">
      <div class="grid grid-cols-12 gap-6 px-2 mt-8 sm:px-4 lg:px-8">
        <div class="col-span-12 2md:col-span-8">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2 py-4 md:w-6/12">
                <FormLabel>Title</FormLabel>
                <FormInput
                  placeholder="Title"
                  inpuType="text"
                  inputId="title"
                  inpuName="title"
                  v-model="form.title"
                />
                <FormInputError v-if="errors.title">
                  {{ errors.title[0] }}
                </FormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <FormLabel>Slug</FormLabel>
                <FormInput
                  placeholder="Slug"
                  inpuType="text"
                  inputId="slug"
                  inpuName="slug"
                  v-model="form.slug"
                />
                <FormInputError v-if="errors.slug">
                  {{ errors.slug[0] }}
                </FormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <FormLabel>Kicker</FormLabel>
                <FormInput
                  placeholder="Kicker"
                  inpuType="text"
                  inputId="kicker"
                  inpuName="kicker"
                  v-model="form.kicker"
                />
                <FormInputError v-if="errors.kicker">
                  {{ errors.kicker[0] }}
                </FormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <FormLabel>Author</FormLabel>
                <FormInput
                  placeholder="Author"
                  inpuType="text"
                  inputId="author"
                  inpuName="author"
                  v-model="form.user.name"
                  disabled
                />
              </div>

              <div class="w-full px-2 py-4 md:w-full">
                <FormLabel>Teaser</FormLabel>
                <FormTextArea
                  rows="5"
                  placeholder="Teaser"
                  inpuType="text"
                  inputId="teaser"
                  inpuName="teaser"
                  v-model="form.teaser"
                />
                <FormInputError v-if="errors.teaser">
                  {{ errors.teaser[0] }}
                </FormInputError>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <FormLabel>Content</FormLabel>
              <FormTextArea
                rows="10"
                placeholder="Content"
                inpuType="text"
                inputId="content"
                inpuName="content"
                v-model="form.content"
              />
              <FormInputError v-if="errors.content">
                {{ errors.content[0] }}
              </FormInputError>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <FormLabel>Categories</FormLabel>
                  <div
                    class="flex flex-wrap p-2 my-3 border rounded-md"
                    v-for="category in categories"
                    :key="category.id"
                  >
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        class="mx-2 rounded-md form-checkbox"
                        :name="category.name"
                        :id="category.name"
                        :value="category.id"
                        v-model="form.categories"
                      />

                      <label
                        class="font-semibold text-blue-600 cursor-pointer"
                        :for="category.name"
                      >
                        {{ category.name }}
                      </label>
                    </div>

                    <div
                      class="flex items-center"
                      v-for="child in category.children"
                      :key="child.id"
                    >
                      <input
                        type="checkbox"
                        class="mx-2 rounded-md form-checkbox"
                        :name="child.name"
                        :id="child.name"
                        :value="child.id"
                        v-model="form.categories"
                      />
                      <label class="cursor-pointer" :for="child.name">
                        {{ child.name }}
                      </label>
                    </div>
                  </div>
                  <FormInputError v-if="errors.categories">
                    {{ errors.categories[0] }}
                  </FormInputError>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- aside  -->
        <div class="col-span-12 2md:col-span-4">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <FormLabel>Status</FormLabel>
              <FormSelect v-model="form.status" id="inputId" inputName="status">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </FormSelect>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <FormLabel>Make Aeticle</FormLabel>
                  <div class="flex flex-wrap p-1 -pl-2">
                    <div class="relative flex items-start mt-2">
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          class="mx-2 rounded-md form-checkbox"
                          name="pinned"
                          id="pinned"
                          v-model="form.pinned"
                        />
                        <label class="cursor-pointer" for="pinned">
                          Pinned
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-1">
                  <img src="" alt="img" class="" />
                  <button class="mt-3 text-blue-600 underline"></button>
                  <div
                    class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md "
                  >
                    <div class="space-y-1 text-center">
                      <img src="@/assets/icons/image.svg" alt="svg" />
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer  hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
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
                <div class="w-full px-2 py-4">
                  <FormLabel>Thumbnail:</FormLabel>
                  <FormInput placeholder="Thumbnail URL" type="text" />
                  <FormInputError v-if="errors.title">
                    {{ errors.title[0] }}
                  </FormInputError>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              {{ form.tags }}
              {{ tags }}
              <FormLabel>Tags</FormLabel>
              <multiselect
                v-model="selectedTags"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="hash_id"
                :options="tags"
                :multiple="true"
                :hideSelected="true"
                :taggable="true"
                @tag="newTagAdd"
              ></multiselect>
            </div>
            <div class="w-full px-2 py-4">
              <FormLabel>Area</FormLabel>
              <FormSelect>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </FormSelect>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 px-2 sm:px-4 lg:px-8">
        <FormButton
          type="submit"
          class="w-full text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500 hover:ring-1"
          >Submit</FormButton
        >
      </div>
    </form>
  </div>
</template>

<script>
import map from 'lodash.map'
import Multiselect from 'vue-multiselect'

export default {
  data() {
    return {
      categories: [],
      topics: [],
      tags: [],
      selectedTags: [],
      errors: '',
    }
  },
  components: {
    Multiselect,
  },

  async asyncData({ params, app, error }) {
    try {
      let articleResponse = await app.$axios.$get(
        `articles/${encodeURI(params.slug)}`
      )
      let categoryResponse = await app.$axios.$get('categories')
      let topicResponse = await app.$axios.$get('topics')
      let tagResponse = await app.$axios.$get('tags')

      let article = articleResponse.data

      return {
        categories: categoryResponse.data,
        topics: topicResponse.data,
        tags: tagResponse.data,
        article: article,

        form: {
          title: article.title,
          slug: article.slug,
          kicker: article.kicker,
          thumbnail: article.thumbnail,
          teaser: article.teaser,
          content: article.content,
          pinned: article.pinned,
          status: article.status,
          user: article.user,
          categories: map(article.categories, 'id'),
          topics: map(article.topics, 'id'),
          tags: map(article.tags, 'id'),
          regions: map(article.tags, 'id'),
        },
      }
    } catch (e) {
      error({
        statusCode: e.response.status,
      })
    }
  },

  methods: {
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
    async articleUpdate() {
      try {
        await this.$axios
          .patch(`articles/${this.article.slug}`, this.form)
          .then(({ data }) => {
            this.successMessage()
          })
      } catch (e) {
        ;(this.errors = e.response.data.errors), this.errorMessage()
      }
    },
  },
  async newTagAdd(newTag) {
    let name = newTag
    let addedTag = this.addToServer(name)
  },
  async addToServer(name) {
    try {
      await this.$toast.show('New Tag adding...', {
        icon: 'hourglass-half',
      })
      let tagForm = {
        name: name,
        slug:
          name +
          '-' +
          name.substring(0, 2) +
          Math.floor(Math.random() * 10000000),
      }
      await this.$axios.post(`tags`, tagForm).then(({ data }) => {
        this.tags.push(data.data)
        this.selectedTags.push(data.data)
      })
      this.$toast.success('New Tag added successfully.', {
        icon: 'tags',
      })
    } catch (e) {
      this.$toast.error('Error while adding the tag...', {
        icon: 'times-circle',
      })
    }
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style >
@import 'vue-multiselect/dist/vue-multiselect.min.css';

.body-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
.multiselect__input {
  border-radius: 5px !important;
  min-height: 40px;
}
</style>
