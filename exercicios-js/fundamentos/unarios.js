let num1 = 1
let num2 = 2

num1++ //forma pós fixada
console.log(num1)
--num1 //forma pre-fixada
console.log(num1)
//a forma pre-fixada tem uma ordem de precedência
//maior que que a pós-fixada

console.log(++num1 === num2--)
console.log(num1 === num2)