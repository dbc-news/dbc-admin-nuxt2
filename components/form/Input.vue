<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :v-model="fieldName"
    class="flex-grow w-full h-10 px-2 border border-gray-300 rounded-md shadow-sm  focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50 focus:outline-none"
  />
</template>

<script>
export default {
  props: {
    type: {
      required: false,
      type: String,
      default: "text",
    },
    fieldName: {
      required: false,
      type: String,
      default: "name",
    },
    placeholder: {
      required: false,
      type: String,
      default: "text",
    },
  },
};
</script>
