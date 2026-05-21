import { createWebHistory, createRouter } from 'vue-router';
import DeveloperList from '@/views/DeveloperList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'developer-list',
      component: DeveloperList,
    },
  ],
});

export default router;
