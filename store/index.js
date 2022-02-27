export const state = () => ({
  news: [],
})
// Getters
export const getters = {
  news(state) {
    return state.news
  },
}
// Mutations
export const mutations = {
  SET_NEWS(state, news) {
    state.news = news
  },
}
// Actions
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app }) {
    let news = await app.$axios.$get('articles')
    commit('SET_NEWS', news.data)
  },
}
