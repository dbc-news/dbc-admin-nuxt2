<template>
  <input
    type="checkbox"
    class="mx-2 rounded-md form-checkbox"
    :name="boxName"
    :id="boxId"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    boxName: {
      required: false,
      type: String | Number,
      default: null,
    },
    boxId: {
      required: false,
      type: String | Number,
      default: null,
    },
    value: {
      required: false,
      type: String | Number,
      default: null,
    },
  },
}
</script>
