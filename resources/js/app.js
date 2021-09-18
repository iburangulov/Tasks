require('./bootstrap');

import Vue from "vue";

import Application from "./Application";
import router from "./router"

new Vue({
    el: '#app',
    render: h => h(Application),
    router
});
