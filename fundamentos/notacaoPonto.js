console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Barril'
//obj1['nome'] = 'Barril Segundo'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Executando...')
    }
}

const obj2 = new Obj('\nBorracha')
const obj3 = new Obj('Lapis')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()