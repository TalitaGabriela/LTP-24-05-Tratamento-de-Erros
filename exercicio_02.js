/*
  Todos os atributos necessários. Assim, usando Try e Catch, trate os erros e apresente uma mensagem quando houve atributos vazios.
*/

class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    try {
      return this.atributos()
  } catch(erro){
      return erro
  }
}

  atributos() {
    if(this.nome != "" && this.idade != "" && this.turma != ""){
      return {nome: this.nome,
             idade: this.idade,
             turma: this.turma};
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

const estudante = new Estudante("João", 16, "3A");
console.log(estudante.mostrarAtributos());