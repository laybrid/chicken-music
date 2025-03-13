import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Recommend from '@/views/recommend.vue'
import Singer from '@/views/singer.vue'
import TopList from '@/views/top-list.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
