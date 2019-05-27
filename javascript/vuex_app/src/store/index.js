import Vue from "vue"
import Vuex from "vuex"
import router from "../router"

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    button: ["確認", "送信"],
    component: ["TextareaComp", "StringComp"]
  },
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState }) {
      console.log("buttonAction")
      // commit("setStepCount", null, { root: true })
      if (rootState.errorFlag) {
        commit("setStepCount", null, { root: true })
      }
      if (rootState.stepCount === 2) {
        router.push("thanks")
      }
    }
  },
  getters: {
    // getButton(state, getters, rootState) {
    //   return state.button[rootState.stepCount]
    // }
    button: (state, getters, rootState) => state.button[rootState.stepCount],
    isComponent: (state, getters, rootState) =>
      state.component[rootState.stepCount]
  }
}

const Head = {
  state: {
    title: ["感想を入力", "確認画面", "送信完了"]
  },
  mutations: {},
  actions: {},
  getters: {
    title: (state, getters, rootState) => state.title[rootState.stepCount]
  }
}

const String = {
  namespaced: true,
  getters: {
    string: (state, getters, rootState) => rootState.impression
  }
}

const Textarea = {
  namespaced: true,
  state: {
    errorMsg: "入力は必須です"
  },
  getters: {
    error: (state, getters, rootState) => {
      if (rootState.errorFlag) {
        return null
      } else {
        return state.errorMsg
      }
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0,
    impression: "",
    errorFlag: false
  },
  mutations: {
    setStepCount(state) {
      console.log("rootsetStepCount")
      state.stepCount++
    },
    updateImpression(state, value) {
      state.impression = value
      if (state.impression) {
        state.errorFlag = true
      } else {
        state.errorFlag = false
      }
    }
  },
  modules: {
    Form,
    Head,
    Textarea,
    String
  }
})
