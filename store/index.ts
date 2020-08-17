import VuexPersistence from 'vuex-persist'
import Vuex from 'vuex'
import user from './user'

const vuexLocal = new VuexPersistence({
  storage: sessionStorage
})

const store = () => new Vuex.Store({
  modules: {
    user
  },
  plugins: [vuexLocal.plugin]
})

export default store
