import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PredictView from "../views/PredictView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/predict",
    name: "predict",
    component: PredictView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
