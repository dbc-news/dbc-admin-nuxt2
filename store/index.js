export default {
  state: () => ({
    // articles: [],
  }),

  getters: {
    // articles(state) {
    //   return state.articles
    // },
  },

  mutations: {
    // SET_ARTICLES(state, articles) {
    //   state.articles = articles
    // },
  },

  actions: {
    async nuxtServerInit({ commit, dispatch }, { app }) {
      // let response = await app.$axios.$get('articles')
      // commit('SET_ARTICLES', response.data)
    },
  },
}
