// pessoa -> 123
const pessoa = {nome: 'Eu'}
pessoa.nome = 'Tu'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ele'}

Object.freeze(pessoa)

// Não permite alterar nada no Objeto
pessoa.nome = 'Nos'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Gomes'})
console.log(pessoaConstante)