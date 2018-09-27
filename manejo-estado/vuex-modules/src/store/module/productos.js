const productos = [
    { nombre: 'Kelly Baldeon', precio: 40 },
    { nombre: 'Raul Alfonso', precio: 30 },
];

const mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto),
};

export default {
    state: productos,
    mutations,
};