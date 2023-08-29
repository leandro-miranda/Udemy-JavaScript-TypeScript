new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Botão clicado!')
        },
        // alterarValor(event) {
        //     this.valor = event.target.value
        // },
        // alterarValorEnter(event) {
        //     this.valor = event.target.value
        // }
    }
})