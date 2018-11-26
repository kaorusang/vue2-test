import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vfor from './views/Vfor.vue'
import Parent from './views/Parent.vue'
import Brother from './views/Brother.vue'
import Emit from './views/Emit.vue'


// import Vmodel from './views/Vmodel.vue'
// import lifec from './views/lifec'
// import computed from './views/computed'
// import watch from './views/watch'
// import firstVux from './views/firstVux'
// import firstVuex from './views/firstVuex'
// import dynamic from './views/dynamicComp.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: Vfor
    },
    //子传父，父传子数据
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    },
    //兄弟页面传数据
    {
      path: '/brother',
      name: 'brother',
      component: Brother
    },
    // $on，$emit，v-on
    {
      path: '/emit',
      name: 'emit',
      component: Emit
    },
    // {
    //   path: '/lifec',
    //   name: 'lifec',
    //   component: lifec
    // },
    // {
    //   path: '/vModel',
    //   name: 'vmodel',
    //   component: Vmodel
    // },
    // {
    //   path: '/computed',
    //   name: 'computed',
    //   component: computed
    // },
    // {
    //   path: '/watch',
    //   name: 'watch',
    //   component: watch
    // },
    // {
    //   path: '/firstVux',
    //   name: 'firstVux',
    //   component: firstVux
    // },
    // {
    //   path: '/dynamic',
    //   name: 'dynamic',
    //   component: dynamic
    // },
    // {
    //   path: '/secoundVuex',
    //   name: 'secoundVuex',
    //   component: secoundVuex
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue') //异步加载
    // }
  ]
})
