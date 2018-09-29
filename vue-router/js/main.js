const home = Vue.component('home', {
    template: '<h1>Portada</h1>',
});

const contacto = Vue.component('contacto', {
    template: '<p>Contacto</p>',
});

//Plano de destino con sus rutas
const routes = [
    { path: '/', component: home},
    { path: '/contacto', component:contacto},
];

// Instanciar el componente router
const router = new VueRouter({
    routes,
});

new Vue({
    el: 'main',
    router,
})