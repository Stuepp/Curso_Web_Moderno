let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//se caso não esteja dentro do escopo
//ele irá procurar mais afora
//let tem escópo global, função e de bloco