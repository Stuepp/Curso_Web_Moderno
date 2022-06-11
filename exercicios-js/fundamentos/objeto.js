const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
//Objeto é uma coleção de uma par de chaves e valores
//Um objeto pode ter ouro objeto dentro dele
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.10//evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 75.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

'{"nome": "Camisa Polo", "preco": 79.90}'
//JSON é um formato textual