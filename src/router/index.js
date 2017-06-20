import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import C2F from '@/pages/C2F'
import learnComponent from '@/pages/learnComponent'
import Count from '@/pages/Count'
import Todo from '@/pages/Todo'
import Weather from '@/pages/Weather'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: C2F
    },
    {
      path: '/learn-component',
      name: 'learn-component',
      component: learnComponent
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },{
      path: '/todo',
      name: 'todo',
      component: Todo
    },{
      path: '/weather',
      name: 'weather',
      component: Weather
    },{
      path: '/login',
      name: 'login',
      component: Login
    },
    { path: '/*', redirect: '/login' }
  ]
})
