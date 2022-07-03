import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import Film from "./components/Film.vue"


const routes =  [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/film/:id',
        name: 'film',
        component: Film,
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router;