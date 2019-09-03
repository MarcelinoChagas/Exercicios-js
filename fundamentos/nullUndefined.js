let valor
console.log(valor)
/* console.log(valor2)  // Vai retornar erro*/

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.00
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // esta sem preco
console.log(!!produto.preco)
console.log(produto)