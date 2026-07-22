const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 8
};

const {nome,preco,estoque} = produto
console.log(nome)
console.log(preco)
console.log(estoque)

const {nome:nomeProduto, preco:valor, estoque:quantidade} = produto
console.log(nomeProduto)
console.log(valor)
console.log(quantidade)

