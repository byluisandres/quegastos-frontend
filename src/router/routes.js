const routes = [
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('../views/pages/auth/login.vue')
    },
    {
        path: '/auth/recover-password',
        name: 'recover-password',
        component: () => import('../views/pages/auth/recover-password.vue')
    }
];

export default routes;