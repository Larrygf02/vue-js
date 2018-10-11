import Equipo from './components/Equipo.vue'
import Home from './components/Home.vue'
import Usuario from './components/Usuario.vue'
import UsuarioFotos from './components/UsuarioFotos.vue'
import UsuarioBio from './components/UsuarioBio.vue'
import Contacto from './components/Contacto.vue'
import NoEncontrado from './components/NoEncontrado.vue'
import {store} from './store'

export const routes = [
    {path: '/', component: Home},
    {path: '/prueba',alias: '/otraprueba', redirect: '/', component: Home},
    {path: '/equipo/:id', component: Equipo, children: [
        /* {path:'', component: Usuario, name:'equipo', children: [
            {path: 'fotos', component: UsuarioFotos, name:'fotos'},
            {path: 'bio', component: UsuarioBio, name:'bio'},
        ]}, */
        {path: '', components:{
            default: Usuario,
            bio: UsuarioBio,
            fotos: UsuarioFotos,
        }, name:'equipo'},
    ]},
    {
        beforeEnter: ((to, from, next)=> {
            console.log('Acceso a ruta');
            next(store.state.auth)
        }),
        path: '/contacto', meta: {privado: true} , component: Contacto, name: 'contacto', props: {newsletter: true}},
    {path: '*', component: NoEncontrado},
];
