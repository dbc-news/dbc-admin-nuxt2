export default {
  actions: {
    async login({ dispatch }, data) {
      await this.$auth.loginWith('laravelSanctum', {
        data: data,
      })
    },
  },
}
