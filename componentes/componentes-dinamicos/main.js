Vue.component('lista-tareas',{
    template: `<div>
                    <h1><slot></slot></h1>
                    <ul>
                        <tarea v-for="tarea in tareas" :tarea="tarea" :key="tarea.id"></tarea>
                    </ul>
                    <hr>
                </div>`,
    data() {
        return {
            tareas: [
                'Aprender componentes',
                'Comprender el ciclo de vida de VUE',
                'Aprender Flutter',
                'Limpiar la casa :v',
            ],
        }
    }
});


Vue.component('tarea',{
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`,

});

Vue.component('contacto',{
    template: `<div><a href="">raulgf_02@hotmail.com</a><hr></div>`
});

Vue.component('bio',{
    template: `<div><p>Hola bienvenidos a los componentes dinámicos</p><hr></div>`
});

new Vue({
    el: 'main',
    data: {
        'seleccionado': 'lista-tareas'
    }
});