/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos(){
    try {
      return this.atributos()
  } catch(erro){
     return erro
  }
  } 

  atributos() {
      if(this.nome != "" && this.idade != "" && this.especie != ""){
      return{nome: this.nome,
             idade: this.idade,
             especie: this.especie};
      } else{
        throw new MeuErro("Falta preencher algum dado.");
    }
  }
}

class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}

const meuAnimal = new Animal("Fido", 3, "cachorro");
console.log(meuAnimal.mostrarAtributos());