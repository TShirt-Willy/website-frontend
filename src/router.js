import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Kontakt from './views/Kontakt.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/kontakt', name: 'kontakt', component: Kontakt },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() { return { top: 0 } }
})
