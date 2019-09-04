// Funcao sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b)    
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(10, 14, 4, 5, 9, 0)


// Funcao com retorno
function soma(a, b = 0)
{
    return a + b
}

console.log(soma(5,2))
console.log(soma(1))
console.log(soma())