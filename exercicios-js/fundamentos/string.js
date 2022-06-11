const escola = 'cod3r'

console.log(escola.charAt(4))
//charAt me da a letra de uma string em uma determinada
//posição

console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
//charCodeAt irá retornar o valor da letra/número da posição selecionado
//dentro da tabela unicode

console.log(escola.substring(1))
//substring escreve a string de uma determinada posição selecionada
//até seu final
console.log(escola.substring(0, 3))//(posição inicial, posição final)

console.log('Escola '.concat(escola.concat('!')))
//concat para concatenar duas ou mais strings

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

console.log('Escola ' + escola + '!')