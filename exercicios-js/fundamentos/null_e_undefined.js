const a = { name: 'Teste' }
console.log(a)

const b = a
console.log(b)

b.name = 'Opa'

console.log(a)
//a constante 'a' apenas aponta para o endereço do obj
//na mémoria
//e 'b' está recebendo o endereço de 'a'
//assim elas estão falando do mesmo objeto

let c = 3
let d = c
d++
console.log(c)
//quando se trabalha com tipos primitivos
//não se armazena o endereço
//é feita uma cópia por valor

let valor //não iniciada
console.log(valor)

valor = null //não tem nenhum valor e nenhum endereço
//ausência de valor
console.log(valor)
//console.log(valor.toString()) Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.59
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)