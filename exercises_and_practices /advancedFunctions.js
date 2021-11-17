// pode-se passar varios argumentos para uma função mesmo que ela nao tenha parametros...
// se ela for declarada como const ou como function ( sem ser arrow ), ela guarda os arguments///

function arguments() {
    console.log('Olá, estou executando mesmo passando os parametros sem ser requeridos...')
}

arguments('teste', 1, 2, 3, 4, 5, 6, 7, 8, 9, 8888888);

// mas ele guarda isso numa palavra reservada como arguments...
function arguments2() {
    console.log(arguments)
}

arguments2('valor', {test: 'test1'}, 1, 2, 3, 4, 5, 6, 7, 8, 9)
arguments2()
arguments2(['1'])

// se quiser ter acesso, tem que colocar no log de uma vez o que quer fazer acesso.

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c, ...arguments)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25, 69)
// 160 1 2 3 1 2 3 4 5 6 7 8 9 10 11 25 69
//conclusão: se usar os spread operator, vc ainda tem acesso a TODOS elementos do coringa arguments...