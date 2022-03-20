import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'

// Auth Guard
const  requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log("Current user in auth guard: ", user)
  if(!user) {
    next({ name: "Welcome" })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/chatroom',
    name: "Chatroom",
    beforeEnter: requireAuth,
    component: () => import('../views/Chatroom.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
