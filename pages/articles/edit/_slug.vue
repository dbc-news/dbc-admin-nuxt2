<template>
  <div class="">
    <Breadcrumb
      leading="Articles"
      trialing="Articles"
      :href="{ name: 'index' }"
      breadcrumb="Articles / Create"
    />
    <form action="">
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
                <FormInputError>The title field is required</FormInputError>
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
                <FormInputError>The title field is required</FormInputError>
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
                <FormInputError>The title field is required</FormInputError>
              </div>

              <div class="w-full px-2 py-4 md:w-full">
                {{ form.teaser }}
                <FormLabel>Teaser</FormLabel>
                <FormTextArea
                  rows="5"
                  placeholder="Teaser"
                  inpuType="text"
                  inputId="teaser"
                  inpuName="teaser"
                  v-model="form.teaser"
                />
                <FormInputError>The title field is required</FormInputError>
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
              <FormInputError>The title field is required</FormInputError>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  {{ form.categories }}

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
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  {{ form.topics }}
                  <FormLabel>Topics</FormLabel>
                  <div class="flex flex-wrap p-1">
                    <div
                      class="relative flex items-start"
                      v-for="topic in topics"
                      :key="topic.id"
                    >
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          class="mx-2 rounded-md form-checkbox"
                          :name="topic.name"
                          :id="topic.name"
                          :value="topic.id"
                          v-model="form.topics"
                        />
                        <label class="cursor-pointer" :for="topic.name">
                          {{ topic.name }}{{ topic.id }}
                        </label>
                      </div>
                    </div>
                  </div>
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
              <FormSelect>
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
                        <FormCheckbox boxName="pinned" boxId="pinned" />
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
                  <FormInputError>The title field is required</FormInputError>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <FormLabel>Tags</FormLabel>
              <FormSelect>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </FormSelect>
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
          class="w-full text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500 hover:ring-8"
          >Submit</FormButton
        >
      </div>
    </form>
  </div>
</template>

<script>
import map from 'lodash.map'

export default {
  data() {
    return {
      categories: [],
      topics: [],
    }
  },

  async asyncData({ params, app, error }) {
    try {
      let articleResponse = await app.$axios.$get(
        `articles/${encodeURI(params.slug)}`
      )
      let categoryResponse = await app.$axios.$get('categories')
      let topicResponse = await app.$axios.$get('topics')

      let article = articleResponse.data

      return {
        categories: categoryResponse.data,
        topics: topicResponse.data,
        form: {
          title: article.title,
          kicker: article.kicker,
          thumbnail: article.thumbnail,
          teaser: article.teaser,
          content: article.content,
          pinned: article.pinned,
          status: article.status,
          user: article.user,
          categories: map(article.categories, 'id'),
          topics: map(article.topics, 'id'),
        },
      }
    } catch (e) {
      error({
        statusCode: e.response.status,
      })
    }
  },
}
</script>
