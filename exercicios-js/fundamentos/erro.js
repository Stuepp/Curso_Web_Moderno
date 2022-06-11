function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'menssagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
/*
 * Usar o TRY é um bloco para funções, ações, que podem gerar erros
 * CATCH é para tentar tratar o erro, relançar ele, enviar uma msg etc..
 * FINALLY sempre será executado não importa se deu erro ou não
*/
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)