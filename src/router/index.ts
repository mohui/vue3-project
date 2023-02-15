import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

// 路由项
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/layout/index.vue')
    },
    {
        path: '/hello',
        component: () => import('../views/hello/index.vue')
    }
]

//路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;