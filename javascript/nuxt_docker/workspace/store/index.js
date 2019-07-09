import Vuex from "vuex"

const store = () =>
  new Vuex.Store({
    state: {
      isMenuActive: false
    },
    mutations: {
      toggleMenu(state) {
        state.isMenuActive = !state.isMenuActive
      },
      resetMenu(state) {
        state.isMenuActive = false
      }
    }
  })

export default store
