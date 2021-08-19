const quaseArray = {0: 'Rafael', 1: 'Borracha', 2:'Gomes'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Borracha', 'Gomes']
console.log(quaseArray.toString(), meuArray)