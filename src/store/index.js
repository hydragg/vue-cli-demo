import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import todo from './modules/todo'
//import { state, mutations } from './mutations'
import * as getters from './getters'
//import * as actions from './actions'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    count,
    todo
  },
  // state,
  // mutations,
   getters,
  // actions,
  strict: true
})