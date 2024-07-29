import { createApp } from 'vue'
import './style.css'

import router from './router/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'; // Asegúrate de importar el CSS de MDI

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      iconfont: 'mdi', // Configura Vuetify para usar mdi
    },
  })

createApp(App).use(vuetify).use(router).mount('#app')
