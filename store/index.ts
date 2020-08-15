import VuexPersistence from 'vuex-persist'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'

const vuexLocal = new VuexPersistence({
  storage: sessionStorage
})

const store = () => new Vuex.Store({
  modules: {
    user,
    shared
  },
  plugins: [vuexLocal.plugin]
})

export default store
