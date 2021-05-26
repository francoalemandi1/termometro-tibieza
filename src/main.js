import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import mitt from 'mitt';                  // Import mitt
const emitter = mitt(); 


const app = createApp(App)
  app.use(router)
  app.provide('emitter', emitter)
  app.mount('#app')
