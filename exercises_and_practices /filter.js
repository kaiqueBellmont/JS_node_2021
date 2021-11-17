const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 10, 11, 12, 13]
const filteredArray = array.filter(num => num % 2 === 0)
console.log(filteredArray)

function quadrado(x) {
    num2 = Math.pow(x, 2)
    if (num2 % 2 === 0) return num2

}

// isso aqui ta lindo
const arrayQuadrado = array.map(quadrado, array).filter(num => num)
console.log(arrayQuadrado)

function teste(string) {
    console.log(string)
}

const teste2 = (string) => string

teste('ryan')
console.log(teste2('ryan'))