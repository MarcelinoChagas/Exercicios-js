const alunos = [
    {nome: 'Momu', nota: 8.2, bolsista: true},
    {nome: 'Look', nota: 5.2, bolsista: false},
    {nome: 'Pool', nota: 7.2, bolsista: false},
    {nome: 'Kloo', nota: 9.5, bolsista: true},
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // aqui é definido o valor iniciar neste caso 0

console.log(resultado)