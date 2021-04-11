import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import WeekView from '../views/WeekView.vue'
import Nest from '../views/Nest.vue'
import DayView from '../views/DayView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path:'/:pathMatch(.*)*',
    redirect:'/week'
  },
  {
    path: '/',
    name: 'Home',
    component: Nest,
    children:[
      {
        path: '/week',
        name: 'WeekView',
        component: WeekView,
      },
      {
        path: '/day',
        name: 'DayView',
        component: DayView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
