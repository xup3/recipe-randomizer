import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: () => import("../views/RecipesView.vue"),
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: () => import("../views/RecipeView.vue"),
      props: true,
    },
  ],
});

export default router;
