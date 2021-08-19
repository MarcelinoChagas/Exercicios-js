let opcao = 0

function getInteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

while (opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a proxima')