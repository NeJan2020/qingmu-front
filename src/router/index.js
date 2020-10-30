import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonalCenter from '@/components/PersonalCenter'
import OrderSubmit from '@/components/OrderSubmit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/orderSubmit',
      name: 'OrderSubmit',
      component: OrderSubmit
    }
  ]
})
