import * as firebase from 'firebase'
import { Commit } from 'vuex'

interface User {
  email: string,
  id:string,
  name: string
}
interface State{
  user: User
}

export default {
  state () {
    return {
      user: null
    }
  },
  mutations: {
    setUser (state:State, payload:any) {
      state.user = payload
    }
  },
  actions: {
    signUserInGoogle ({ commit }:{commit:Commit}) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user:any) => {
          const newUser = {
            id: user.additionalUserInfo.profile.id,
            name: user.additionalUserInfo.profile.name,
            email: user.additionalUserInfo.profile.email
          }

          commit('setUser', newUser)
          return '로그인 성공'
        })
        .catch((error:string) => {
          return '로그인 실패 :' + error
        })
    },
    logout ({ commit }:{commit:Commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state: State) {
      return state.user
    }
  }
}
