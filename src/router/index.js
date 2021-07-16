import Vue from 'vue'
import Router from 'vue-router'
import selectAppId from './modules/selectAppId'
import dashboard from './modules/dashboard'
import nofound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    ...selectAppId.routes,
    ...dashboard.routes,
    {
      path: '*',
      name: 'nofound',
      component: nofound
    }
  ]
})
