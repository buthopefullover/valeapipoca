import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import router from "./router"

import db from "./services/UserService"

const app = Vue.createApp(App).use(router).mount('#app')
app.config.globalProperties.$http = db;