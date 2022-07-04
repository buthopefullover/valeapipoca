import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './assets/css/styles.css'
import router from "./router"
import db from "./services/UserService"

Vue.prototype.$http = db
createApp(App).use(router).mount('#app')
