const numeros = [10, 20, 30, 40];

const soma = numeros.reduce( (acumulador, numero) => {
    return acumulador+numero
},0)

console.log(soma)

const multiplicação = numeros.reduce((acumulador, numero) => {
    return acumulador*numero
},1)

console.log(multiplicação)

const MaiorNumber = numeros.reduce((acumulador, numero) => {
    if(acumulador < numero && numero>acumulador){
        return numero
    }

    return acumulador
},0)

console.log(MaiorNumber)