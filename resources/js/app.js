
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');
//window.Vue = require('vue');

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

// vue components/page
import App from './views/App.vue';

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent'));
//Vue.component('widget', require('./components/WidgetComponent'));

const router = new VueRouter({
    mode: 'history', //does not work in IIS
    routes
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    }
});

//require('./demo');
