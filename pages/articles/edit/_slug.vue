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
                <AppLabel>Title</AppLabel>
                <AppInput
                  placeholder="Title"
                  type="text"
                  id="title"
                  name="title"
                  v-model="form.title"
                />
                <AppInputError v-if="errors.title">
                  {{ errors.title[0] }}
                </AppInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <AppLabel>Slug</AppLabel>
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
              <div class="w-full px-2 py-4 md:w-6/12">
                <AppLabel>Kicker</AppLabel>
                <AppInput
                  placeholder="Kicker"
                  type="text"
                  id="kicker"
                  name="kicker"
                  v-model="form.kicker"
                />
                <AppInputError v-if="errors.kicker">
                  {{ errors.kicker[0] }}
                </AppInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <AppLabel>Author</AppLabel>
                <AppInput
                  placeholder="Author"
                  type="text"
                  id="author"
                  name="author"
                  v-model="form.user.name"
                  disabled
                />
              </div>

              <div class="w-full px-2 py-4 md:w-full">
                <AppLabel>Teaser</AppLabel>
                <FormTextArea
                  rows="5"
                  placeholder="Teaser"
                  id="teaser"
                  name="teaser"
                  v-model="form.teaser"
                />
                <AppInputError v-if="errors.teaser">
                  {{ errors.teaser[0] }}
                </AppInputError>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <AppLabel>Content</AppLabel>
              <FormTextArea
                rows="10"
                placeholder="Content"
                id="content"
                name="content"
                v-model="form.content"
              />
              <AppInputError v-if="errors.content">
                {{ errors.content[0] }}
              </AppInputError>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <AppLabel>Categories</AppLabel>
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
                  <AppInputError v-if="errors.categories">
                    {{ errors.categories[0] }}
                  </AppInputError>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- aside  -->
        <div class="col-span-12 2md:col-span-4">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <AppLabel>Status</AppLabel>
              <FormSelect v-model="form.status" id="status" name="status">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </FormSelect>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <AppLabel>Make Aeticle</AppLabel>
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
                <div class="w-full py-4">
                  <div v-if="selectedThumbnails">
                    <img
                      :src="selectedThumbnails.thumb600x314"
                      alt="img"
                      class="w-full border"
                    />
                    <!-- <AppInput
                      placeholder="Thumbnail URL"
                      type="text"
                      class="mt-3"
                      name="thumbnail_url"
                      id="thumbnail_url"
                      v-model="selectedThumbnails.thumb600x314"
                    /> -->
                  </div>
                  <div v-else>
                    <img
                      src="@/assets/images/placeholder.png"
                      alt="img"
                      class="w-full border rounded-md h-52"
                    />
                  </div>
                  <AppInputError v-if="errors.thumbnail">
                    {{ errors.thumbnail[0] }}
                  </AppInputError>
                </div>
                <div class="mt-1">
                  <!-- <button class="mt-3 text-blue-600 underline">dfd</button> -->
                  <div
                    class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer "
                    @click.prevent="showAppImageIndexModal"
                  >
                    <div class="space-y-1 text-center">
                      <ImagePlus />
                      <div class="flex text-sm text-gray-600"></div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <AppLabel>Tags</AppLabel>
              <multiselect
                v-model="selectedTags"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="slug"
                :options="tags"
                :multiple="true"
                :hideSelected="true"
                :taggable="true"
                @tag="newTagAdd"
              ></multiselect>
              <AppInputError v-if="errors.tags">
                {{ errors.tags[0] }}
              </AppInputError>
            </div>

            <div class="w-full px-2 py-4">
              <AppLabel>Regions</AppLabel>
              <multiselect
                v-model="selectedRegions"
                placeholder="Search region"
                label="local_name"
                track-by="uuid"
                :options="regions"
                :multiple="true"
                :hideSelected="true"
                :regionable="true"
              ></multiselect>
              <AppInputError v-if="errors.regions">
                {{ errors.regions[0] }}
              </AppInputError>
            </div>

            <div class="w-full px-2 py-4">
              <AppLabel>Topics</AppLabel>
              <multiselect
                v-model="selectedTopics"
                placeholder="Search a topic"
                label="name"
                track-by="uuid"
                :options="topics"
                :multiple="true"
                :hideSelected="true"
                :topicable="true"
              ></multiselect>
              <AppInputError v-if="errors.topics">
                {{ errors.topics[0] }}
              </AppInputError>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 px-2 sm:px-4 lg:px-8">
        <AppButton
          type="submit"
          class="w-full text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
          >Submit</AppButton
        >
      </div>
    </form>
    <AppImageIndexModal
      @selectedImageFromModal="selectedImageFromModal"
      :thumbnail="selectedThumbnails"
    />
  </div>
</template>

<script>
import map from 'lodash.map'
import Multiselect from 'vue-multiselect'

export default {
  data() {
    return {
      categories: [],
      tags: [],
      topics: [],
      regions: [],

      selectedTags: [],
      selectedRegions: [],
      selectedTopics: [],
      selectedThumbnails: null,

      errors: '',
    }
  },
  components: {
    Multiselect,
  },
  // middleware: ['redirectIfGuest'],

  async asyncData({ params, app, error }) {
    try {
      let articleResponse = await app.$axios.$get(
        `articles/${encodeURI(params.slug)}`
      )
      let categoryResponse = await app.$axios.$get('categories')
      let tagResponse = await app.$axios.$get('tags')
      let regionResponse = await app.$axios.$get('regions')
      let topicResponse = await app.$axios.$get('topics')

      let article = articleResponse.data

      return {
        categories: categoryResponse.data,
        tags: tagResponse.data,
        regions: regionResponse.data,
        topics: topicResponse.data,

        article: article,
        selectedTags: article.tags,
        selectedRegions: article.regions,
        selectedTopics: article.topics,
        selectedThumbnails: article.thumbnails,
        form: {
          title: article.title,
          slug: article.slug,
          kicker: article.kicker,
          teaser: article.teaser,
          content: article.content,
          pinned: article.pinned,
          status: article.status,
          user: article.user,
          thumbnail: article.thumbnails ? article.thumbnails.id : null,
          categories: map(article.categories, 'id'),
          tags: map(article.tags, 'id'),
          regions: map(article.regions, 'id'),
          topics: map(article.topics, 'id'),
        },
      }
    } catch (e) {
      console.log(e.response.data.errors)
    }
  },
  watch: {
    selectedTags() {
      this.form.tags = map(this.selectedTags, 'id')
    },
    selectedRegions() {
      this.form.regions = map(this.selectedRegions, 'id')
    },
    selectedTopics() {
      this.form.topics = map(this.selectedTopics, 'id')
    },
  },
  methods: {
    showAppImageIndexModal() {
      this.$modal.show('app-image-index-modal')
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
    selectedImageFromModal(image) {
      this.selectedThumbnails = image
      this.form.thumbnail = image.id

      this.$modal.hide('app-image-index-modal')
    },
    async articleUpdate() {
      console.log(this.form)
      try {
        await this.$axios
          .patch(`articles/${this.article.slug}`, this.form)
          .then(({ data }) => {
            this.successMessage()
            this.errors = []
          })
      } catch (e) {
        ;(this.errors = e.response.data.errors), this.errorMessage()
      }
    },
    async newTagAdd(newTag) {
      let name = newTag
      let addedTag = this.addToServer(name)
    },
    async addToServer(name) {
      try {
        let tagForm = {
          name: name,
          slug:
            name +
            '-' +
            name.substring(0, 2) +
            Math.floor(Math.random() * 10000000),
        }
        await this.$axios.post(`tags`, tagForm).then(({ data }) => {
          this.tags.push(data)
          this.selectedTags.push(data)
        })
      } catch (e) {
        this.errorMessage()
      }
    },
    // async photosUploaded(photo) {
    //   this.form.thumbnail = photo.href.origin
    // },
  },
}
</script>


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
