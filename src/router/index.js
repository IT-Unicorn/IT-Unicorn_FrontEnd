import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import about from '@/components/about/about'
import register from '@/components/header/register/register'
import questionPlatform from '../components/questionPlatform/router/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    questionPlatform, //问题平台
  ]
})
