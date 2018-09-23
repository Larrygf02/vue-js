import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        tareas: [
            {nombre: 'Aprender Vue routing', completado: false},
            {nombre: 'Aprender vue-cli', completado: false},
            {nombre: 'Aprender Node', completado: false},
            {nombre: 'Aprender paradigma funcional', completado: true},
        ]
    },
    getters: {
        tareasCompletadas: (state) => {
            return state.tareas.filter(x => x.completado).length;
        }
    }

})