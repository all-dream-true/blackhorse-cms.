import Vue from 'vue'
import Router from 'vue-router'

//引入tabbar中的组件
import Home from "@/components/tabbar/home"
import Cart from "@/components/tabbar/cart"
import Member from "@/components/tabbar/member"
import Search from "@/components/tabbar/search"

//引入news中的组件
import NewsDetail from "@/components/news/detail"
import NewsList from "@/components/news/list"

//引入pictures中的组件
import PicsDetail from "@/components/pictures/detail"
import PicsList from "@/components/pictures/list"

//引入goods中的组件
import GoodsDetail from "@/components/goods/detail"
import GoodsList from "@/components/goods/list"
import GoodsDesc from "@/components/goods/desc"
import GoodsComment from "@/components/goods/comment"

Vue.use(Router)

export default new Router({
  routes: [
    //tabbar中的路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    //商品的路由
    {
      path: '/goods',
      component: GoodsList
    },
    {
      path: '/goods/detail/:id',
      component: GoodsDetail
    },
    {
      path: '/goods/desc/:id',
      component: GoodsDesc
    },
    {
      path: '/goods/comment/:id',
      component: GoodsComment
    },
    //新闻页路由
    {
      path: '/news',
      component: NewsList
    },
    {
      path: '/news/detail/:id',
      component: NewsDetail
    },
    //图片页路由
    {
      path: '/pics',
      component: PicsList
    },
    {
      path: '/pics/:id',
      component: PicsDetail
    },
  ]
})
