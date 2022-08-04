import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import Film from "./components/Film.vue"
import Person from "./components/Person.vue";
import Films from "./components/Films";
import Actors from "./components/Actors";


const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/film/:id/:info?",
        name: "film",
        component: Film,
    },
    {
        path: "/films/:sort/:search?/:genre?",
        name: "films",
        component: Films,
    },
    {
        path: "/person/:id",
        name: "person",
        component: Person,
    },
    {
        path: "/actors",
        name: "actors",
        component: Actors,
    },
];

const router = createRouter({ history: createWebHistory(), routes })

export default router;