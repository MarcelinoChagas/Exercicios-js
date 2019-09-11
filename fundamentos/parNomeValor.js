// par nome/valor
const saudacao = 'Eae' // Contexto Léxico 1

function exec()  {
    const saudacao = 'Dale' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares de nome/valor
const cliente = {
    nome: 'Marcelino',
    idade: 25,
    peso: 80,
    endereco: {
        logradouro: 'Rua Moral',
        numero: 256
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)