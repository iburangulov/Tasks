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
       }
   ]
});
