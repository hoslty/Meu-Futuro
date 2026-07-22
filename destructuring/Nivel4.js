const funcionario = {
    id: 15,
    nome: "Pedro",
    salario: 6500,
    setor: "TI",
    ativo: true
};

const {nome,salario} = funcionario
console.log(nome)
console.log(salario)

const {nome:nomeFuncionario, salario:salarioMensal} = funcionario
console.log(nomeFuncionario)
console.log(salarioMensal)