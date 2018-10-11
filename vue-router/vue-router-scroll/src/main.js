import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Info from './components/Info.vue'
import Bio from './components/Bio.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Info},
  {path: '/bio', component: Bio},
];

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
