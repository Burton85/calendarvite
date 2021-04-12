import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/main.scss'
import { state,createStore } from './store' 


createApp(App).provide(state, createStore())
.use(router).mount('#app')

// createApp(App).use(router).use(store).mount('#app')