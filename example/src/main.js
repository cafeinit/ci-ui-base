/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CIUIBase from 'ci-ui-base'

Vue.use(VueRouter)
Vue.use(CIUIBase.plugin)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Block',
      path: '/block',
      component: resolve => require(['./views/Block.vue'], resolve)
    },

    {
      name: 'Media',
      path: '/media',
      component: resolve => require(['./views/Media.vue'], resolve)
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')