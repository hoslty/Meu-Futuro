const produtos = [
    {nome:'notebook', valor:3500},
    {nome:'celular', valor:1500},
    {nome:'geladeira', valor:4500},
]

const nomes = produtos.map( produto => {
    return produto.nome
})

console.log(nomes)

const valores = produtos.map ( produto => {
    return produto.valor
})

console.log(valores)

const desconto = produtos.map( produto => {
    return produto.valor  - produto.valor/10 
})

console.log(desconto)

const maiusculo = produtos.map(produto => {
    return produto.nome.toUpperCase()
})

console.log(maiusculo)
