//SEGUNDO DESAFIO
const usuario = {
    nome: "Pedro",
    idade: 18
};

const {nome,idade, cidade = 'nao informado'} = usuario
console.log(nome)
console.log(idade)
console.log(cidade)

const carro = {
    marca: "BMW"
};

const {marca, modelo = 'modelo desconhecido'} = carro
console.log(marca)
console.log(modelo)