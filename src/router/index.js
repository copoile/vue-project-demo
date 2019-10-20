import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/home/index')
    },
    {
      path: '/list/demo-01',
      name: 'ListDemo01',
      meta: {
        title: 'ListDemo01'
      },
      component: () => import('@/views/list-demo-01/index')
    },
    {
      path: '/list/demo-02',
      name: 'ListDemo02',
      meta: {
        title: 'ListDemo02'
      },
      component: () => import('@/views/list-demo-02/index')
    },
    {
      path: '/head/demo-01',
      name: 'HeadDemo01',
      meta: {
        title: 'ListDemo02'
      },
      component: () => import('@/views/head-demo-01/index')
    }
  ]
})
export default router
