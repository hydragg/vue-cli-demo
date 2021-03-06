import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import todo from './modules/todo'
import * as getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    count,
    todo
  },
   getters,
  strict: true
})