import Home from './components/Home.vue';
import Dashboardv1 from './components/examples/Dashboardv1.vue';
import Dashboardv2 from './components/examples/Dashboardv2.vue';

export const routes = [
    // {
    //     path: '/',
    //     name: 'default',
    //     component: Home,
    //     //props: true
    // },
    {
        path: '/home',
        name: 'home',
        component: Home,
        //props: true
    },
    {
        path: '/dashboard-v1',
        name: 'dashboard-v1',
        component: Dashboardv1
    },
    {
        path: '/dashboard-v2',
        name: 'dashboard-v2',
        component: Dashboardv2
    }
];
