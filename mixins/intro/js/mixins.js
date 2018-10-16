var mixin = {
    created() {
        console.log('Creado desde el mixin')
    },
    data: function() {
        return {
            cursos: [
                { nombre: 'Mongo BD' },
                { nombre: 'Node' },
                { nombre: 'Machine Learning' },
                { nombre: 'Deep Learning' },
            ],
            new_curso: null,
        }
    },
    methods: {
        add_curso: function () {
            this.cursos.unshift({
                nombre: this.new_curso,
            });
            this.new_curso = null
        },
        saludar() {
            console.log('Saludar desde el mixin')
        }
    }   
}