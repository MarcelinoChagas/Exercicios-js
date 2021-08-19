const carrinho = [
    '{ "nome": "Picole", "preco": 5.00 }',
    '{ "nome": "Feijão", "preco": 15.00 }',
    '{ "nome": "Arroz", "preco": 8.22 }',
    '{ "nome": "Lenovo", "preco": 3000.00 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)