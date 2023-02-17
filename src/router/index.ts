import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

// 路由项
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/layout',
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: "/school",
                name: "school",
                component: () => import("../views/school/index.vue"),
                meta: {
                    title: "学校",
                    icon: "IMenuPatientAll"
                }
            },
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页'
                },
                component: () => import('../views/home/index.vue')
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
            icon: 'icon-menu'
        },
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: "index",
                name: "index",
                component: () => import("../views/school/index.vue"),
                meta: {
                    title: "学校",
                    icon: "IMenuPatientAll"
                }
            },
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页'
                },
                component: () => import('../views/home/index.vue')
            }
        ]
    },
    {
        path: '/hello',
        name: 'hello',
        meta: {
            title: '欢迎页面',
            icon: 'Avatar'
        },
        component: () => import('../views/hello/index.vue')
    }
]

export const routeMenus: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
            icon: 'icon-menu'
        },
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/hello',
        name: 'hello',
        meta: {
            title: '欢迎页面',
            icon: 'Avatar'
        },
        component: () => import('../views/hello/index.vue')
    },
    {
        path: '/school',
        name: 'school',
        meta: {
            title: '学校页面',
            icon: 'Avatar'
        },
        component: () => import('../views/school/index.vue')
    }
]

//路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;