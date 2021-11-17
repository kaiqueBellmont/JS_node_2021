const pessoa = {
    nome: 'maria',
    sobrenome: 'do carmo',
    idade: 18,
    endereco: {
        rua: 'av do contorno',
        numero: 18
    }
};

console.log('***************************************************************************')
for (let chave in pessoa) {
    console.log(chave)
}
console.log('***************************************************************************')

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}
console.log('***************************************************************************')
for (let chave in pessoa) {
    console.log(pessoa[chave])
}
console.log('***************************************************************************')
