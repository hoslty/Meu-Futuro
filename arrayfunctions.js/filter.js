const produtos = [
    {nome:'notebook', valor:3500},
    {nome:'celular', valor:1500},
    {nome:'geladeira', valor:4500},
    {nome:'mouse', valor:50},
    {nome:'teclado', valor:120},
]

const ValoresAcimaDeMil = produtos.filter(valores => valores.valor > 1000)
console.log(ValoresAcimaDeMil)

const ValoresAbaixoDeQuinhentos = produtos.filter(produto => produto.valor < 500)
console.log(ValoresAbaixoDeQuinhentos)

const MaisdeOitoLetras = produtos.filter(produto => produto.nome.length > 8)
console.log(MaisdeOitoLetras)

const ProductName = produtos.filter(produto => produto.nome == 'mouse')
console.log(ProductName)