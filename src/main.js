import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import './assets/style/main.scss'
createApp(App).use(router).mount('#app')
