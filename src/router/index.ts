import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/components/MainPage.vue";
import GamesPage from "@/components/GamesPage.vue";
import ProjectsPage from "@/components/ProjectsPage.vue";
import SuggestionPage from "@/components/SuggestionPage.vue";
import SuggestionUserPage from "@/components/SuggestionUserPage.vue";

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
    {
      path: '/suggestion',
      name: 'SuggestionPage',
      component: SuggestionPage
    },
    {
      path: '/suggestion/posts',
      name: 'SuggestionUserPage',
      component: SuggestionUserPage
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return { selector: to.hash };
      }
    }
  }
})



export default router
