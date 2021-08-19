console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Boa', 'Baba')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Lau')
console.log(aprovados.length)

// Todo espaço entre 3 e 9 será adicionado ao Array como undefined
aprovados[9] = 'Dafuck'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort() // Altera o array, movendo as posições undefined para o final
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1)
console.log(aprovados)