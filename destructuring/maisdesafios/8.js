const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 80, estoque: 50 },
    { nome: "Teclado", preco: 150, estoque: 20 }
];

const lista = produtos.map(({nome,preco,estoque}) => {
    return `o ${nome} possui ${estoque} unidades`
})

console.log(lista)