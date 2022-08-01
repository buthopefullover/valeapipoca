import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import Film from "./components/Film.vue"
import Films from "./components/Films"


const routes =  [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/film/:id/:info?',
        name: 'film',
        component: Film,
    },
    {
        path: '/films/:sort',
        name: 'films',
        component: Films,
    },
    
]

const router = createRouter({ history: createWebHistory(), routes })

export default router;