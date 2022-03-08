//State
export const state = () => {
  errors: {
  }
}

//Getters
export const getters = {
  errors(state) {
    return state.errors
  },
}

//Mutations
export const mutations = {
  SET_VALIDATION_ERRORS(state, errors) {
    state.errors = errors
  },
}

//Actions
export const actions = {
  setErrors({ commit }, errors) {
    commit('SET_VALIDATION_ERRORS', errors)
  },
  clearErrors({ commit }) {
    commit('SET_VALIDATION_ERRORS', {})
  },
}
