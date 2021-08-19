Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this)){
        newArray.push(callback(this[i], i, this))
      }
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Picole", "preco": 5.00 }',
    '{ "nome": "Feijão", "preco": 15.00 }',
    '{ "nome": "Arroz", "preco": 8.22 }',
    '{ "nome": "Lenovo", "preco": 3000.00 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)