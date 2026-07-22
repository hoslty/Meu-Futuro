const funcionarios = [
    {
        nome: "Pedro",
        cargo: "Desenvolvedor",
        salario: 5000
    },
    {
        nome: "Maria",
        cargo: "Designer",
        salario: 4200
    },
    {
        nome: "Lucas",
        cargo: "Gerente",
        salario: 9000
    }
];

const lista = funcionarios.map(({nome,cargo})=> {
    return `${nome} - ${cargo}`
})

console.log(lista)