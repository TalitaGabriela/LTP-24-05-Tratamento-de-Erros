class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try {
      return this.atributos()
  } catch(erro){
      return erro
  }
  }

  atributos() {
    if(this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return{ estudante: this.estudante,
              cosplay: this.cosplay,
              nota_cosplay: this.nota_cosplay};
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

const aluno = new NerdIF("João", "Homem-Aranha",9.5);
console.log(aluno.retornarAtributos());