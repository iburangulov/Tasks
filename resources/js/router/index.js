import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import index from "../components/views"

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '',
            name: 'index',
            component: index
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () => import('../components/views/tasks')
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('../components/views/signin'),
            meta: {
                auth: false,
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('../components/views/signup'),
            meta: {
                auth: false,
            }
        },

        {
            path: '*',
            name: '404',
            component: () => import('../components/errors/404'),
            meta: {
                auth: false,
                show_top_menu: false
            }
        },
    ],
});
