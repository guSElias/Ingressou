import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/evento',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '/evento', component: () => import('pages/EventPage.vue')}]
  }
];

export default routes;
