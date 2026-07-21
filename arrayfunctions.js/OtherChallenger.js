// const produtos = [
//     { nome: "Notebook", categoria: "Eletrônicos", preco: 3500 },
//     { nome: "Mouse", categoria: "Eletrônicos", preco: 80 },
//     { nome: "Geladeira", categoria: "Eletrodomésticos", preco: 4500 },
//     { nome: "Fogão", categoria: "Eletrodomésticos", preco: 2500 },
//     { nome: "Teclado", categoria: "Eletrônicos", preco: 200 }
// ];

// const ValorTotalEletronicos = produtos
//     .filter(produto => produto.categoria === 'Eletrônicos')
//     .reduce((acumulador,categoria) => acumulador + categoria.preco,0)

// console.log(ValorTotalEletronicos)

// const ProdutoMaisCaro = produtos
//         .filter(produto => produto.preco)
//         .reduce((acumulador,produto) => {
//             if(acumulador<produto.preco){
//                 return produto.preco 
//             }
//             return acumulador 
//         },0)

//         console.log(ProdutoMaisCaro)


const numeros = [4, 9, 2, 15, 7];
const MenorNumero = numeros.reduce((acumulador,numero) => {
    if(acumulador > numero){
        return numero
    }
    return acumulador
})

console.log(MenorNumero)