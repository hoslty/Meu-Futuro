const clientes = [
    { nome: "Pedro", idade: 18 },
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 16 },
    { nome: "Ana", idade: 32 },
    { nome: "Lucas", idade: 15 }
];

const MaiorDeIdade = clientes.filter(cliente => cliente.idade >= 18)
console.log(MaiorDeIdade.map(cliente => cliente.nome))

const vendas = [
    { vendedor: "Pedro", valor: 1200 },
    { vendedor: "Pedro", valor: 800 },
    { vendedor: "Maria", valor: 3000 },
    { vendedor: "Pedro", valor: 500 }
];

// let pedro = vendas.filter(loja => loja.valor ? loja.vendedor === 'Pedro': '')
// let VendasPedro =  pedro.reduce((acumulador,receita) => {
//     return acumulador + receita.valor
// },0)
// console.log(VendasPedro)

// let vendasPedro = vendas
//     .filter(loja => loja.vendedor ==='Pedro')
//     .reduce((acumulador,receita) => {
//         return acumulador + receita.valor
//     },0)


const vendasPedro = vendas
    .filter(venda => venda.vendedor === "Pedro")
    .reduce((acumulador, venda) => acumulador + venda.valor, 0);

console.log(vendasPedro)


const usuarios = [
    { nome: "Pedro", ativo: true },
    { nome: "Maria", ativo: false },
    { nome: "João", ativo: true },
    { nome: "Ana", ativo: true }
];

const JustActiveUsers = usuarios.filter(usuario => usuario.ativo)
console.log(JustActiveUsers.map(usuario=> usuario.nome.toUpperCase()))