<template>
  <div>{{ user }}me</div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
    }
  },
  async asyncData({ app, errors }) {
    console.log('profile')
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
