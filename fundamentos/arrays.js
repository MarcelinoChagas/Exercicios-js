const valores = [1.2, 9.6, 7.4, 0.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 8.8
console.log(valores)
console.log(valores.length)

valores.push({id:25}, true, false, 'Marcelino')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores[8])


// Bugando para retornar um valor undefined
valores[3.5] = 0
console.log(valores)
console.log(typeof valores[8])

