import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productos: [
            {nombre: 'Kelly Baldeon', precio: 40},
            {nombre: 'Raul Alfonso', precio: 30},
        ],
        carro: [],
    },
    getters: {
        totalCompra: (state) => state.carro.reduce((total,producto) => total + producto.precio, 0)
    },
    mutations: {
        anadirProducto: (state, producto) => state.productos.unshift(producto),
        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
    }
})