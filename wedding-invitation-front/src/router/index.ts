import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/main/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name: 'MainView',
    component: Main,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
