import {createRouter, createWebHashHistory} from 'vue-router'
import WebSocket from './page/WebSocket.vue'
import ToolUnix from './page/ToolUnix.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: '/', component: WebSocket },
    { path: '/tool/unix', component: ToolUnix },
    { path: '/hello', component: HelloWorld },
]

const router = createRouter({
    history: createWebHashHistory('/ws-test'),
    routes,
})

export default router