const produtos = [
    {nome: 'Ipad', preco: 3000, fragil: true},
    {nome: 'MacBook', preco: 8500, fragil: true},
    {nome: 'Luva de Pano', preco: 5.50, fragil: false},
    {nome: 'Headset', preco: 244, fragil: false},
]

// Meu metodo
console.log(produtos.filter(function(p) {
    return p.preco > 200 && p.fragil === true
}))

// Metodo da Aula  {Dividir em funções caso seja utilizado para reuso}
const caro = produto => produto.preco >= 200
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))