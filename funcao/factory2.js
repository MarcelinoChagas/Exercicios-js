function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Caneta',10.50))
console.log(criarProduto('Lapis',5.10))