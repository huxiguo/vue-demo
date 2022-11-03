import Vue from 'vue'
import Vuex from 'vuex'

// 使用
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前的和
    sum: 0
  },
  mutations: {
    ADD(state, value) {
      state.sum += value
    },
    SUB(state, value) {
      state.sum -= value
    }
  },
  actions: {
    addOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('ADD', value)
      }
    },
    addWait(context, value) {
      setTimeout(() => {
        context.commit('ADD', value)
      }, 500)
    }
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
})
