import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/views/shopMall'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'ShopingMall', component: ShopMall}
  ]
})
