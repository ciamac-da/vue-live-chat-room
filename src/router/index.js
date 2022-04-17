import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'

// Auth Guard
const  requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(!user) {
    next({ name: "Welcome" })
  } else {
    next()
  }
}

const  requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if(user) {
    next({ name: "Chatroom" })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    beforeEnter: requireNoAuth,
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
