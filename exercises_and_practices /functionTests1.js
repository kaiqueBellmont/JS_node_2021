function descobreNome(nome) {
    return nome.toString()

}

function cumprimetos(func) {
    const nome = descobreNome('kaique')
    return `Seja bem vinto ${nome}`
}

console.log(cumprimetos(descobreNome('kaique')))

// Arrow:
const elevar = (a, b) => {
    console.log(a ** b)
}
elevar(5, 10)


// dentro de objetos:
const obj = {
    falar: () => {
        console.log("Falando ...")
    }
}

// another way...
const obj2 = {
    falar() {
        console.log("Falando2 ...")
    }
}
obj.falar()
obj2.falar()