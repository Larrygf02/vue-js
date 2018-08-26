const vm = new Vue({
	el: 'div',
	data: {
		nuevaTarea: null,
		tareas: [
			'Aprender Vue.js',
			'Aprender AWS',
			'Aprender JavaScript'
		]
	},
	methods:{
		agregarTarea(){
			this.tareas.unshift(this.nuevaTarea);
			this.nuevaTarea = null;
		}
	}
})