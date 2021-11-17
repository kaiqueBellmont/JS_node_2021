function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.mostraNome = () => this.nome
}

// PROTOTYPEs são objetos que ficam por baixo dos panos que serevem para setar propriedades para um objeto
// Sendo assim, uma propriedade setada para um objeto nao precisa ser repetida para todos
// deixando de ser necessario usar recursos do cliente
Pessoa.prototype.risada = 'HAHAHHA'
const pessoa = new Pessoa('Kaique', 'costa')
// usando proto
console.log(pessoa.risada)
// sem proto
console.log(pessoa.mostraNome())

// todos objetos que vierem de Pessoa, terão essa propriedade