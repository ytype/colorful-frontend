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
    signUserUp ({ commit }:{commit:Commit}, payload:any) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user:any) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        })
        .catch((error: string) => {
          commit('setLoading', false)
          commit('setError', error)
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    signUserIn ({ commit }:{commit:Commit}, payload:any) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user:any) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
        )
        .catch((error: string) => {
          commit('setLoading', false)
          commit('setError', error)
          // eslint-disable-next-line no-console
          console.log(error)
        }
        )
    },
    signUserInGoogle ({ commit }:{commit:Commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user:any) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
        )
        .catch((error:string) => {
          commit('setLoading', false)
          commit('setError', error)
          // eslint-disable-next-line no-console
          console.log(error)
        }
        )
    },
    signUserInGithub ({ commit }:{commit:Commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((user:any) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
        )
        .catch((error: string) => {
          commit('setLoading', false)
          commit('setError', error)
          // eslint-disable-next-line no-console
          console.log(error)
        }
        )
    },
    autoSignIn ({ commit }:{commit:Commit}, payload:any) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    resetPasswordWithEmail ({ commit }:{commit:Commit}, payload:any) {
      const { email } = payload
      commit('setLoading', true)
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          commit('setLoading', false)
          // eslint-disable-next-line no-console
          console.log('Email Sent')
        })
        .catch((error: string) => {
          commit('setLoading', false)
          commit('setError', error)
          // eslint-disable-next-line no-console
          console.log(error)
        }
        )
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
