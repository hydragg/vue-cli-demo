import Vue from 'vue'
import mutations from './mutations'
import * as types from './mutations_type'

export const actionIncrease = ({ commit }, num) => {
  commit(types.INCREASE, num)
}

export const actionDecrease = ({ commit }, num) => {
  commit(types.DECREASE, num)
}

export const actionCountReset = ({ commit }) => {
  commit(types.COUNT_RESET)
}

export const actionAddTodo = ({ commit }, newTodo) => {
  commit(types.ADD_TODO, newTodo)
}