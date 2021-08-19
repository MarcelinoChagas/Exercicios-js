const alunos = [
    {nome: 'Momu', nota: 8.2, bolsista: true},
    {nome: 'Look', nota: 5.2, bolsista: false},
    {nome: 'Pool', nota: 7.2, bolsista: false},
    {nome: 'Kloo', nota: 9.5, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))