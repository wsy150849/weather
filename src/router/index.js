import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather'
import Read from '../views/Read'
import TodoList from '../views/TodoList'
import ReadContent from '../views/ReadContent'

Vue.use(VueRouter)
// 报NavigationDuplicated的可能解决方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

  const routes = [
  {
    path:'/',
    name:'weaather',
    component:Weather
  },
  {
    path:'/read',
    name:'Read',
    component:Read
  },
  {
    path:"/todo",
    name:"todolist",
    component:TodoList
  },
  {
    path:'/content',
    name:'content',
    component:ReadContent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
