import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Etapes from "../components/Etapes";
import Ingredients from "@/components/Ingredients";
import Recette from "@/components/Recette";
import ListeRecettes from "@/views/ListeRecettes";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/etape/:id',
    name: 'Etape',
    component: Etapes
  },
  {
    path: '/ingredients/:id',
    name: 'Ingredients',
    component: Ingredients
  },
  {
    path: '/recette/:id/:md',
    name: 'Recette',
    component: Recette
  },
  {
    path: '/recettes/:cat?',
    name: 'Recettes',
    component: ListeRecettes
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
