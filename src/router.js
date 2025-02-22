import {createRouter, createWebHistory} from 'vue-router'

import TheWelcome from './components/TheWelcome.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: '/', component: TheWelcome },
    { path: '/hello', component: HelloWorld },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router