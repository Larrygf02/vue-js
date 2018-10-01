import Equipo from './components/Equipo.vue'
import Home from './components/Home.vue'
import EquipoRaul from './components/EquipoRaul.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo', component: Equipo, children: [
        {path:'raul', component: EquipoRaul},
    ]},
];
