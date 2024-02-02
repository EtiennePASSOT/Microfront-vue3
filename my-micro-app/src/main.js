import { createApp } from 'vue'
import App from './App.vue'

async function initApp(el) {
  const app = createApp(App)
  app.mount(el)
}

window.apps = {
  microApp: initApp
}
