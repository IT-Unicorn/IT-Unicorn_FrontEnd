import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import about from '@/components/about/about'
import login from '@/components/header/login/login'
import register from '@/components/header/login/register'
import questionPlatform from '@/components/questionPlatform/router/index'
import blog from '@/components/blog/router/index'
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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    questionPlatform, //问题平台
    blog, //博客
  ],
  scrollBehavior (to, from, savedPosition) {
    //记录路由界面位置,前进后退按钮之后,能滚动到指定位置,没有记录位置则在头部
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
