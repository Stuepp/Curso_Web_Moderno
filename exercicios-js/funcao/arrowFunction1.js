let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a//só pode ter um parametro, muito usado com funções de uma única linha, return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'ola'
ola = _ => 'Ola'//pussui parametro
console.log(ola())