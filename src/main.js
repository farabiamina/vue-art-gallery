import './assets/main.css'
import { VueQueryPlugin } from 'vue-query'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/favorites';

const vueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueQueryPlugin, vueQueryPluginOptions)

app.mount('#app')
