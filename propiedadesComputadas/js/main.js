const vm = new Vue({
	el: '#main',
	data:{
		palabra: '',
		busqueda: '',
		minimo: 5,
		juegos: [
			{
				titulo:'PES',
				genero:'deporte',
				puntuacion: 9
			},
			{
				titulo:'FIFA',
				genero:'deporte',
				puntuacion: 5
			},
			{
				titulo:'NEED FOR SPEED',
				genero:'carros',
				puntuacion: 4
			},
		]
	},
	computed:{
		reversoPalabra(){
			return this.palabra.split('').reverse().join('');
		},
		mejoresJuegos(){
			return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
		},
		buscarJuego(){
			return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
		}
	}
})