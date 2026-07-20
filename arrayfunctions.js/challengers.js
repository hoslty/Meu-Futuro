const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 10 },
    { id: 2, nome: "Mouse", preco: 80, estoque: 50 },
    { id: 3, nome: "Teclado", preco: 150, estoque: 0 },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 8 },
    { id: 5, nome: "Headset", preco: 350, estoque: 15 }
];

const JustProductNames = produtos.reduce((acumulador, produto) =>{
    return acumulador + " " + produto.nome
},'')

const JustProductNamess = produtos.map(produto => produto.nome)

console.log(JustProductNamess)

const EstoqueMaiorQueZero = produtos.filter(produto => produto.estoque > 0)
console.log(EstoqueMaiorQueZero)

const monitor = produtos.find(produto => produto.nome === 'Monitor')
console.log(monitor)

const valorTotalDoEstoque = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.estoque
},0)

console.log(valorTotalDoEstoque)