import * as types from '../mutations_type'

const state = {
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
	  { key: 1, content: 'vuex 2.0', done: false },
	  { key: 2, content: 'vue-router 2.0', done: false },
	  { key: 3, content: 'vue-resource 2.0', done: false },
	  { key: 4, content: 'webpack', done: false }
  ]
}

let todoKey = state.todos.length
const getters = {
  getTodos: state => state.todos.filter(todo => !todo.done),
  getDone: state => state.todos.filter(todo => todo.done)
}

const actions = {
  actionAddTodo({ commit }, newTodo) {
    commit(types.ADD_TODO, newTodo)
  },
  toggleTodo({ commit }, key) {
    commit(types.TOGGLE_TODO, key)
  },
  deleteTodo({ commit }, key) {
    commit(types.DELETE_TODO, key)
  },
  updateTodo({ commit }, obj) {
    commit(types.UPDATE_TODO, obj)
  }
}

const mutations = {
  [types.ADD_TODO](state, newTodo) {
    console.log('add')
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    })
    todokey++
  },
  [types.TOGGLE_TODO](state, key) {
    console.log('toggle')
    for (let i in state.todos) {
      if (state.todos[i].key === key) {
        state.todos[i].done = !state.todos[i].done
        break
      }
    } 
  },
  [types.DELETE_TODO](state, key) {
    console.log('del', key)
    for (let i in state.todos) {
      if (state.todos[i].key === key) {
        console.log(key)
        state.todos.splice(i, 1)
        break
      }
    }
  },
  [types.UPDATE_TODO](state, obj) {
    for (let i in state.todos) {
      if (state.todos[i].key === obj.key) {
        state.todos[i].content = obj.change
        break
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}