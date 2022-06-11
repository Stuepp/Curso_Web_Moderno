//novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logaradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //tire de dentro do objeto
//o(s) atributo(s).
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { logaradouro, numero, cep } } = pessoa
console.log(logaradouro, numero, cep)

/*const { conta: { ag, num } } = pessoa
*console.log(ag, num)
*/