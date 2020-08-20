class Caracteristicas {
  corDoCabelo: string
  corDosOlhos: string
  sexo: string

  constructor(corDoCabelo: string, corDosOlhos: string, sexo: string) {
    this.corDoCabelo = corDoCabelo
    this.corDosOlhos = corDosOlhos
    this.sexo = sexo
  }
}

class Pessoa extends Caracteristicas {
  cpf!: string
  nome!: string

  setCpf(cpf: string, nome: string){
    this.cpf = cpf
    this.nome = nome
  }

  getCpf(cpf: string, nome: string){
    if(this.cpf === cpf && this.nome === nome){
      console.log(`CPF: ${this.cpf} / NOME: ${this.nome}`)
    }else{
      console.error('Você não é você')
    }
  }
}

const pessoa = new Pessoa('Azul', 'Marrom', 'Masculino');
pessoa.setCpf('000.000.000-00', 'Guilherme Victor')

pessoa.getCpf('000.000.000-00', 'Guilherme Victor')

console.log(pessoa)