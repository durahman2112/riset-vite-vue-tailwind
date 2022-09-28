import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Photos from '../views/Photos.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'User',
      component: User,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: User,
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
    {
      path: '/todos',
      name: 'Todos',
      component: User,
    },
  ],
})
