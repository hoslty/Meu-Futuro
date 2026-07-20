const produtos = [
    {nome:'notebook', valor:3500},
    {nome:'celular', valor:1500},
    {nome:'geladeira', valor:4500},
    {nome:'mouse', valor:50},
    {nome:'teclado', valor:120},
]

const Mouse = produtos.find(produto => produto.nome=='mouse')
console.log(Mouse)

const MaiorqueDoisMil = produtos.find(produto => produto.valor > 2000)
console.log(MaiorqueDoisMil)

const Geladeira = produtos.find(produto => produto.nome=='geladeira')
console.log(Geladeira)

const tv = produtos.find(produto => produto.nome=='TV')
console.log(tv)