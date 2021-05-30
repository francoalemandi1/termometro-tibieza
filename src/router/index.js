import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Calculator from "../views/Calculator.vue";
import VeryWarm from '../views/VeryWarm.vue';
import Warm from '../views/Warm.vue';
import Cold from '../views/Cold.vue';
import Lukewarm from '../views/Lukewarm.vue';
import VeryLukewarm from '../views/VeryLukewarm.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/termometro",
    name: "termometro",
    component: Calculator,
  },
  {
    path: '/muy-tibix',
    name: "muy-tibix",
    component: VeryLukewarm,
  },
  {
    path: "/tibix",
    name: "tibix",
    component: Lukewarm,
  },
  {
    path: "/aji-picante",
    name: "aji-picante",
    component: Warm,
  },
  {
    path: "/barrilete-cosmicx",
    name: "barrilete-cosmicx",
    component: VeryWarm,
  },
  {
    path: "/sugerencias",
    name: "sugerencias",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;