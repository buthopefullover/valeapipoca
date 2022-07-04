import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import router from "./router"

import db from "./services/UserService"

Vue.createApp(App).use(router).mount('#app').config.globalProperties.$http = db;
