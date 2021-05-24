import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Questions from "../views/Questions.vue";
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
    path: "/preguntas-frecuentes",
    name: "preguntas-frecuentes",
    component: Questions,
  },
  {
    path: "/test",
    name: "test",
    component: Calculator,
  },
  {
    path: '/helado',
    name: "helado",
    component: Cold,
  },
  {
    path: '/muy-tibio',
    name: "muy-tibio",
    component: VeryLukewarm,
  },
  {
    path: "/tibio",
    name: "tibio",
    component: Lukewarm,
  },
  {
    path: "/crack",
    name: "crack",
    component: Warm,
  },
  {
    path: "/muy-crack",
    name: "muy-crack",
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