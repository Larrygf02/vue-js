const compartido = {
    usuario: {
        nombre: 'Larriega Gallegos, Raul',
    }
}
var app1 = new Vue({
    el: '#app1',
    data: compartido,
})

var app2 = new Vue({
    el: '#app2',
    data: compartido,
})