const escola = "Marc3lino"
//Retornar um caractere
console.log(escola.charAt(0))
console.log(escola.charAt(10))

//Retornar um código ASCII de um caractere
console.log(escola.charCodeAt(4))

// Retorna o indice de um caractere da palavra escola
console.log(escola.indexOf('3'))

//Retorna uma substring de um texto
console.log(escola.substring(1))
console.log(escola.substring(0,3))

//Concatena texto ou caracteres
console.log('Escola'.concat(escola).concat("!"))

//Realiza a substituição de caracteres
console.log(escola.replace(3,'e'))

// Transforma conteudo em array separado por parametro
console.log('Ana,Maria,Marcelino'.split(','))
