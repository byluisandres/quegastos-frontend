import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// vuestic
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

// pinia
const pinia = createPinia()

// routes
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createVuestic())
app.use(pinia)
app.mount('#app')
