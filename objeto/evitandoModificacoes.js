// Object.prevenExtensions
const produto = Object.preventExtensions({
    nome: 'TV', preco: 3000, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'TV'
produto.descricao = 'Borracha Plasma Prata'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Mario', idade: 30}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'World'
delete pessoa.nome
pessoa.idade = 10
console.log(pessoa)

// Object.freeze = selado + valores constantes