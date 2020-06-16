import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from "../views/layout/layout"
import path from 'core-js';
import { compile } from 'vue-template-compiler';
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/'
    },
    {
        path: '/loyo',
        name: 'loyo',
        component: () =>
            import ('../views/Sign in & register/loyo'),
        meta: {
            title: '登录'
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Sign in & register/Register'),
        meta: {
            title: '注册'
        },
    },
    {
        path: '/',
        name: 'layout',
        component: layout,
        children: [{
                // 一进来就加载
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    title: '首页'
                },
            },
            {
                // 退出登录
                path: '/out',
                name: 'out',
                component: () =>
                    import ('../views/sidebar/out'),
                meta: {
                    title: '退出登录'
                }

            },
            // 图片上传
            {
                path: '/picture',
                name: 'picture',
                component: () =>
                    import ('../views/sidebar/picture'),
                meta: {
                    title: '图片上传'
                }
            },
            // 分页表格
            {
                path: '/paging',
                name: 'paging',
                component: () =>
                    import ('../views/sidebar/paging'),
                meta: {
                    title: '表格'
                }
            },
            // 统计图表
            {
                path: '/Statistics',
                name: 'Statistics',
                component: () =>
                    import ('../views/sidebar/Statistics'),
                meta: {
                    title: '统计图表'
                }
            },
            // 标签页
            {
                path: '/label',
                name: 'label',
                component: () =>
                    import ('../views/sidebar/label'),
                meta: {
                    title: '标签页'
                }
            },
            // 导入
            {
                path: '/Import',
                name: 'Import',
                component: () =>
                    import ('../views/sidebar/Import'),
                meta: {
                    title: '导入导出'
                }
            },
            {
                path: '/Post',
                name: 'Post',
                component: () =>
                    import ('../views/sidebar/Post.vue'),
                meta: {
                    title: '发布文章'
                }
            },
            {
                path: '/Publishing',
                name: 'Publishing',
                component: () =>
                    import ('../views/sidebar/Publishing.vue'),
                meta: {
                    title: '已发布'
                }
            },
        ]
    },




    {
        path: '*',
        name: 'Err',
        component: () =>
            import ('../views/err/err'),
        meta: {
            title: '错误'
        },
    }
]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // 路由守卫
router.beforeEach((to, form, next) => {
    document.title = to.meta.title
        // to and from are both route objects. must call `next`.
    let username = localStorage.getItem('user')
    if (to.path === '/loyo' || to.path === '/register') {
        next()
    } else {
        username ? next() : next('/loyo')
    }
})
export default router