import {createRouter, createWebHistory} from "vue-router"
import MainViews from '../components/MainViews.vue'
import emptylist from '../views/emptylist.vue'
import Finder from '../components/Finder.vue'
import Calculator from '../components/Calculator.vue'
const router = createRouter({
    routes: [
        {
            path: "/translate",
            name:"translate",
            component: MainViews
            },
        {
            path: "/emptylist",
            name:"home",
            component: emptylist
            },
            {
                path: "/calendar",
                name:"calendar",
                component: Finder
                },
                {
                    path: "/calculator",
                    name:"calculator",
                    component: Calculator
                    },
],
    history: createWebHistory(),
})

export default router;