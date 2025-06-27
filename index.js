import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Profile from '../views/Profile.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard },
    { path: '/course/:id', component: CourseDetail, props: true },
    { path: '/profile', component: Profile }
  ]
})
