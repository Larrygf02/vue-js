import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', //funciona sin el '#' en la url 
  routes
});

router.beforeEach((to, from, next) => {
  console.log('Acceso a la ruta');
  next(store.state.auth);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
