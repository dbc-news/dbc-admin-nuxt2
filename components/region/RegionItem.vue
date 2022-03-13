<template>
  <div>
    <div
      class="p-2 border sm:px-6 sm:py-3"
      v-for="region in treeRegions"
      :key="region.id"
    >
      <div class="flex justify-between group">
        <div class="">{{ region.local_name }} ({{ region.slug }})</div>
      </div>

      <div class="pl-5 space-y-2" v-if="region.children">
        <RegionItem :treeRegions="region.children" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    treeRegions: {
      required: true,
      type: Array,
    },
  },
}
</script>
