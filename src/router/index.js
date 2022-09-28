import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Photos from '../views/Photos.vue'
import Home from '../views/MainPage.vue'
import LandingPage from '../views/LandingPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Posts',
          component: User,
        },
        {
          path: 'user',
          name: 'User',
          component: User,
        },
        {
          path: 'photos',
          name: 'Photos',
          component: Photos,
        },
        {
          path: 'todos',
          name: 'Todos',
          component: User,
        },
      ]
    },
  ],
})
