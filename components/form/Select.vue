<template>
  <select
    :value="value"
    @change="$emit('input', $event.target.value)"
    class="block w-full text-base leading-6 border-gray-300 rounded-md  select2 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
  >
    <slot />
  </select>
</template>
<script>
export default {
  props: {
    value: {
      required: false,
      type: String,
      default: '',
    },
  },
}
</script>
