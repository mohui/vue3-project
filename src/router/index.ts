import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '../layout/index.vue'

// 路由项
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/home',
        redirect: '/home',
        name: 'home',
        meta: {
            title: "首页",
            icon: 'Grid'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'Grid'
                },
                component: () => import('../views/home/index.vue')
            }
        ]
    },
    {
        path: '/user',
        redirect: '/user',
        name: 'user',
        meta: {
            title: '用户页面',
            icon: 'icon-menu'
        },
        component: Layout,
        children: [
            {
                path: "/user",
                name: "user",
                component: () => import("../views/user/index.vue"),
                meta: {
                    title: "用户 ",
                    icon: "IMenuPatientAll"
                }
            }
        ]
    },
    {
        path: '/hello',
        redirect: '/hello',
        name: 'hello',
        meta: {
            title: '欢迎页面',
            icon: 'Avatar'
        },
        component: () => Layout,
        children: [
            {
                path: "/hello",
                name: "hello",
                component: () => import("../views/hello/index.vue"),
                meta: {
                    title: "欢迎页面 ",
                    icon: "IMenuPatientAll"
                }
            }
        ]
    },
    {
        path: '/school',
        redirect: '/school',
        name: 'school',
        meta: {
            title: '学校页面',
            icon: 'School'
        },
        component: Layout,
        children: [
            {
                path: '/school',
                name: 'school',
                meta: {
                    title: '学校页面'
                },
                component: () => import('../views/school/index.vue')
            }
        ]

    }
]

export const routeMenus: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
            icon: 'Menu'
        },
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("../views/school/index.vue"),
                meta: {
                    title: "首页",
                }
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
        children: [
            {
                path: "hello",
                name: "hello",
                component: () => import("../views/hello/index.vue"),
                meta: {
                    title: "欢迎页面",
                }
            }
        ]
    },
    {
        path: '/school',
        name: 'school',
        meta: {
            title: '学校页面',
            icon: 'School'
        },
        children: [
            {
                path: "school",
                name: "school",
                component: () => import("../views/school/index.vue"),
                meta: {
                    title: "学校页面"
                }
            },
            {
                path: "primarySchool",
                name: "primarySchool",
                component: () => import("../views/school/index.vue"),
                meta: {
                    title: "小学",
                }
            },
            {
                path: "juniorHighSchool",
                name: "juniorHighSchool",
                component: () => import("../views/school/index.vue"),
                meta: {
                    title: "初中",
                }
            }
        ]
    }
]

//路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;