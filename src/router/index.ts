import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/components/MainPage.vue";
import GamesPage from "@/components/GamesPage.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/games',
      name: 'GamesPage',
      component: GamesPage
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: ProjectsPage
    },
  ]
})

export default router
