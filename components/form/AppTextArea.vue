<template>
  <textarea
    class="flex-grow w-full px-2 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: {
      required: false,
      type: String,
      default: '',
    },
    placeholder: {
      required: false,
      type: String,
      default: 'text',
    },
  },
}
</script>

