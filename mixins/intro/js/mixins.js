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
            if (this.new_curso != null && this.new_curso != '') {
                this.cursos.unshift({
                    nombre: this.new_curso,
                });
            }
            this.new_curso = null
        },
        remove_curso: function(curso) {
            console.log(curso);
            index = this.cursos.findIndex(c=> {
                console.log(c.nombre);
                return c.nombre == curso.nombre;
            })
            console.log(index);
            this.cursos.splice(index,1);
        },
        saludar() {
            console.log('Saludar desde el mixin')
        }
    }   
}