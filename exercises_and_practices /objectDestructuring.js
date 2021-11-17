const pessoa = {
    nome: 'maria',
    sobrenome: 'do carmo',
    idade: 18,
    endereco: {
        rua: 'av do contorno',
        numero: 18
    }
};
//pode=se adicionar um valor padrao
const {nome = '', sobrenome, idade} = pessoa
console.log(nome, sobrenome)
// pode-se usar o nome da chave, mas passando-a para a variavel:
const {nome: exemplo, sobrenome: exemplo2} = pessoa
console.log(exemplo, exemplo2)

//outro exemplo importante:
const {
    endereco:
        {rua: r = 'Valor padrao que pode ser atribuido caso não exista o campo', numero},
    endereco
} = pessoa
console.log(r + 'teste para ver se tenho acesso ')
//pode-se pegar o objeto inteiro também
console.log(endereco);

//pode usar spread também:
const {nome: nomeSpread, ...resto} = pessoa
console.log(nomeSpread)
console.log(resto)

