import VueRouter from 'vue-router'

// 引入组件
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import Message from '@/pages/Message.vue'
import Detail from '@/pages/detail.vue'
const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      nmae: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'news',
          path: 'news',
          component: News,
          meta: {
            isAuth: true
          }
        },
        {
          name: 'message',
          path: 'message',
          component: Message,
          meta: {
            isAuth: true
          },
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: Detail,
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title
                }
              }
            }
          ]
        }
      ]
    }
  ]
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('test') === 'hello') {
      next()
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  
})
export default router
