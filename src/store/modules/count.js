import * as types from '../mutations_type'

const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

const actions = {
  actionIncrease({ commit }, num) {
    commit(types.INCREASE, num)
  },
  actionDecrease({ commit }, num) {
    commit(types.DECREASE, num)
  },
  actionCountReset({ commit }) {
    commit(types.COUNT_RESET)
  }
}

const mutations = {
  [types.INCREASE](state, num) {
    state.count += (num * 1)
  },
  [types.DECREASE](state, num) {
    state.count -= (num * 1)
  },
  [types.COUNT_RESET](state) {
    state.count = 0
  } 
}

export default {
  state,
  getters,
  actions,
  mutations
}