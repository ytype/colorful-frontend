import * as firebase from 'firebase'
import { Commit } from 'vuex'

interface State{
  user: any
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
      console.log('signUserInGoogle 호출')
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user:any) => {
          console.log('then 진입')
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          console.log(newUser)
          commit('setUser', newUser)
          return '로그인 성공'
        })
        .catch((error:string) => {
          console.log('catch 진입')
          return '로그인 실패' + error
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
