const livros = [
    {
        titulo: "Clean Code",
        autor: "Robert Martin",
        paginas: 464
    },
    {
        titulo: "JavaScript: The Good Parts",
        autor: "Douglas Crockford",
        paginas: 176
    }
];

const SomenteTituloeAutor = livros.filter(({titulo,autor}) => {
    return `titulo: ${titulo}, autor: ${autor}`
})

const vasco = livros.map(({ titulo, autor }) => {
    return {
        titulo,
        autor
    }
})

console.log(vasco)