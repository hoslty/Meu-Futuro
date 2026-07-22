const usuario = {
    id: 15,
    nome: "Pedro",
    email: "pedro@email.com",
    senha: "123456",
    admin: true
};

const {nome,email,admin} = usuario
if(admin){
    console.log('é adm')
} else{
    console.log('nao é adm')
}