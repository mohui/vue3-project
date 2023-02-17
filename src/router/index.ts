import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

// 路由项
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/layout',
        component: () => import('../views/layout/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/hello',
        name: 'hello',
        meta: {
            title: '欢迎页面'
        },
        component: () => import('../views/hello/index.vue')
    }
]

//路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;