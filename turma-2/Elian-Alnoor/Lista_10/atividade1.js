// Crie uma aplicação em JS que receba um nome do usuário e crie um 
// novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este 
// objeto deve ser criado usando uma classe.
class Usuario {
    constructor(nome){
        this.nome = nome
    }
}
let user = new Usuario('Elian')

console.log(user)
