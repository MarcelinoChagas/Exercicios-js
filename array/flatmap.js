const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Mar',
        nota: 10
    }, {
        nome: 'Lpe',
        nota: 9
    }]
}, {
    nome: 'Turma R2',
    alunos: [{
        nome: 'Ter',
        nota: 7
    }, {
        nome: 'Kir',
        nota: 8
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 10, 9 ], [ 7, 8 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)