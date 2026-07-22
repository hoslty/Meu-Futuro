const cliente = {
    nome: "Maria",
    telefone: "99999-9999"
};

const {nome,telefone, email = 'email nao cadastrado'} = cliente
console.log(email)