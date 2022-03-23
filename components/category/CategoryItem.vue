<template>
  <div>
    <div
      class="p-2 border sm:px-6 sm:py-3"
      v-for="category in treeCategories"
      :key="category.id"
    >
      <div class="flex justify-between group">
        <div class="">{{ category.name }}</div>
        <div class="opacity-0 cursor-default group-hover:opacity-100">
          <button
            class="px-2 text-sm text-red-400 hover:text-red-500"
            :title="category.slug"
            @click.prevent="deleteCategory(category.slug)"
          >
            Delete
          </button>
          <button
            class="px-2 text-sm text-blue-400 hover:text-blue-500"
            @click.prevent="editCategory(category)"
          >
            Edit
          </button>
        </div>
      </div>

      <div class="pl-5 space-y-2" v-if="category.children">
        <CategoryItem
          @editCategoryActionFromItem="editCategory"
          @deleteCategoryActionFromItem="deleteCategory"
          :treeCategories="category.children"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    treeCategories: {
      required: true,
      type: Array,
    },
  },

  methods: {
    editCategory(category) {
      this.$emit('editCategoryActionFromItem', category)
    },
    
    deleteCategory(slug) {
      this.$emit('deleteCategoryActionFromItem', slug)
    },
  },
}
</script>
