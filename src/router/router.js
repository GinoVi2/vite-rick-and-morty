import {  createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PersonajesView from '../views/PersonajesView.vue'
import LocalizacionesView from '../views/LocalizacionesView.vue'
import EpisodiosView from '../views/EpisodiosView.vue'

const routes = [
  { path: '/', 
    name: 'HOME',
    component: HomeView
  },
  { path: '/personajes',
    name: 'PERSONAJES',
    component: PersonajesView
  },
  { path: '/localizaciones',
    name: 'LOCALIZACIONES',
    component: LocalizacionesView
  },
  { path: '/episodios',
    name: 'EPISODIOS',
    component: EpisodiosView
  },
]

/* 
  Crear rutas para
  Personajes
  Localizaciones 
  Episodios
*/

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router