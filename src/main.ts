import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import './style/main.scss'

const _state=store.state
const _useState=store



createApp(App).use(router).provide('state',_state).provide('useState',_useState).mount('#app')
