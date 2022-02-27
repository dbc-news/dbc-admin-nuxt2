<template>
  <textarea
    class="flex-grow w-full px-2 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
    :rows="rows"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default {
  props: {
    placeholder: {
      required: false,
      type: String,
      default: 'text',
    },
    rows: {
      required: false,
      type: Number | String,
      default: 10,
    },
  },
}
</script>
