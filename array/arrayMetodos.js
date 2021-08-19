const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Xumaquer']
console.log(pilotos)
pilotos.pop()
console.log(pilotos)

pilotos.push('Rubinho')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Renmilton') // adiciona na primeira posicao
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottinha', 'Macarrão')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // remove macarrão que está na [3]
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)