{ { { { var sera = 'Será???' } } } }
console.log(sera)
//A váriavel 'var' ficará vísivel para todos mesmo fora do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
//Quando você define uma váriavel dentro de uma função
//ela está vísivel apenas dentro da função
//quando você criar uma váriavel fora de uma função
//ela é global