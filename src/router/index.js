import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import C2F from '@/pages/C2F'
import learnComponent from '@/pages/learnComponent'
import Count from '@/pages/Count'
import Todo from '@/pages/Todo'
import Weather from '@/pages/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
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
    },
    { path: '/*', redirect: '/hello' }
  ]
})
