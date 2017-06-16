import * as types from './mutations_type'
import Vue from 'vue'

// state
export const state = {
  count: 0
}

// mutations
export const mutations = {
  [types.INCREASE](state) {
    state.count += 1
  },
  [types.DECREASE](state) {
    state.count -= 1
  },
  [types.COUNT_RESET](state) {
    state.count = 0
  }
}