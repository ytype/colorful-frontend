interface State{
    loading: boolean,
    error: any
}

export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setLoading (state:State, payload:any) {
      state.loading = payload
    },
    setError (state:State, payload:any) {
      state.error = payload
    },
    clearError (state:State) {
      state.error = null
    }
  },
  actions: {
    clearError ({ commit }:{commit:any}) {
      commit('clearError')
    },
    setError ({ commit }:{commit:any}, payload:any) {
      commit('setError', payload)
    }
  },
  getters: {
    loading (state:State) {
      return state.loading
    },
    error (state:State) {
      return state.error
    }
  }
}
