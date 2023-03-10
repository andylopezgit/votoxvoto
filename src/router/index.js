import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import eleccionView from "@/views/eleccionView.vue";
import conteoView from "@/views/conteoView.vue";
import contactoView from "@/views/ContactoView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eleccion",
    name: "eleccion",
    component: eleccionView,
  },
  {
    path: "/conteo",
    name: "conteo",
    component: conteoView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: contactoView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
