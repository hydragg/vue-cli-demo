import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import C2F from '@/components/C2F'

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
    }
  ]
})
