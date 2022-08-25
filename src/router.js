import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Work from "@/pages/Work.vue";
import Divider from "@/pages/Divider.vue";

const routes = [
  {
    path: "/",
    component: Divider,
  },
  {
    path: "/work",
    component: Work,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
