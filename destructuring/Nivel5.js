const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

// function vascao(){
//     produtos.map(produto => {
//     let {nome,preco} = produto
//     console.log(`${nome} - R$ ${preco}`)    
// })
// }


const lista = produtos.map(({ nome, preco }) => {
    return `${nome} - R$ ${preco}`;
});

console.log(lista);

produtos.forEach(({ nome, preco }) => {
    console.log(`${nome} - R$ ${preco}`);
});