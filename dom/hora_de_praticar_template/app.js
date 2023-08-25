new Vue({
		el: '#desafio',
		data: {
			nome: 'Leandro Miranda',
			idade: 40,
			imagemUrl: 'https://vuejs.org/images/logo.png'
		},
		methods: {
			multiplicarIdadePor3() {
				return this.idade * 3;
			},
			random() {
				return Math.random();
			},
		}
})