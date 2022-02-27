export const state = () => ({
  articles: [],
})
// Getters
export const getters = {
  articles(state) {
    return state.articles
  },
}
// Mutations
export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}
// Actions
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app }) {
    let response = await app.$axios.$get('articles')
    commit('SET_ARTICLES', response.data)
  },
}
