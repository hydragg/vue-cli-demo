import * as types from './mutations_type'
import Vue from 'vue'

// state
export const state = {
  count: 0,
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
	  { key: 1, content: 'vuex 2.0', done: false },
	  { key: 2, content: 'vue-router 2.0', done: false },
	  { key: 3, content: 'vue-resource 2.0', done: false },
	  { key: 4, content: 'webpack', done: false }
  ]
}
let todoKey = state.todos.length
// mutations
export const mutations = {
  [types.INCREASE](state, num) {
    state.count += (num * 1)
  },
  [types.DECREASE](state, num) {
    state.count -= (num * 1)
  },
  [types.COUNT_RESET](state) {
    state.count = 0
  },
  [types.ADD_TODO](state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    })
    todoKey++
  },
  [types.TOGGLE_TODO](state, key) {
    for (let i in state.todos) {
      let todo = state.todos[i]
      if (todo.key === key) {
        todo.done = !todo.done
        break
      }
    }
  },
  [types.DELETE_TODO](state, key) {
    for (let i in state.todos) {
      let todo = state.todos[i]
      if (todo.key === key) {
        state.todos.splice(i, 1)
        break
      }
    }
  },
  [types.UPDATE_TODO](state, obj) {
    for (let i in state.todos) {
      if (obj.key === state.todos[i].key) {
        state.todos[i].content = obj.change
        break
      }
    }
  }
}