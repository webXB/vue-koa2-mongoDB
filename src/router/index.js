import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/views/shopMall'
import Register from '@/views/register'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'ShopingMall', component: ShopMall},
    {path:'/register',name:'Register', component: Register}
  ]
})
