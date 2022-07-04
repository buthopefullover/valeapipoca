import {createApp} from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import router from "./router"

import db from "./services/UserService"

createApp(App).use(router).mount('#app').provide('$http', db)
