function tratarErroLancar(erro){
    //throw new Error('Não foi possivel Carregar o Nome')
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
/** Try, Catch, Finally
 *  try = Caso acontece algum erro no trecho de código
 *  catch = Lança o erro para tratamento ou para retornar outra mensagem
 *  finally = independente de erro ou não sera executado o respectivo trecho
 */
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroLancar(e)
    } finally{
        console.log('final')
    }   
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)