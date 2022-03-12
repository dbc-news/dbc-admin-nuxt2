<template>
  <div>{{ user }}me</div>
</template>
<script>
export default {
  middleware: ['authIndent'],

  data() {
    return {
      user: '',
    }
  },

  async asyncData({ app, errors }) {
    try {
      let response = await app.$axios.get('me')

      return {
        user: response.data,
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
