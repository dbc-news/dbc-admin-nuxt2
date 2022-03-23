export default {
  state: () => ({
    isOpen: false,
  }),

  getters: {
    isOpen(state) {
      return state.isOpen
    },
  },

  mutations: {
    SET_DRAWER_OPENED(state) {
      state.isOpen = true
    },

    SET_DRAWER_CLOSED(state) {
      state.isOpen = false
    },
  },

  actions: {
    open({ commit }) {
      commit('SET_DRAWER_OPENED')
    },

    close({ commit }) {
      commit('SET_DRAWER_CLOSED')
    },
  },
}
