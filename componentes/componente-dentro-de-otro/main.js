Vue.component('lista-tareas',{
    props: ['tareas'],
    template: `<div>
                    <h1><slot></slot></h1>
                    <ul>
                        <tarea v-for="tarea in tareas" :tarea="tarea" :key="tarea.id"></tarea>
                    </ul>
                </div>`
});

Vue.component('tarea',{
    props: ['tarea'],
    template: `<li> {{ tarea }}</li>`
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            'Aprender componentes',
            'Comprender el ciclo de vida de VUE',
            'Aprender Flutter',
            'Limpiar la casa :v',
        ]
    }
});