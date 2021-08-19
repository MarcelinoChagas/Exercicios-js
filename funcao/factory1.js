const prod1 = { 
    nome: 'Toalha',
    preco: 20
}
const prod2 = { 
    nome: 'Chinelo',
    preco: 5
}

// Factory Simples
function criarPessoa(){
    return{
        nome:'Balde',
        preco: 25
    }
}

console.log(criarPessoa())