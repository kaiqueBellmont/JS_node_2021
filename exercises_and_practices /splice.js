const array1 = ['maria', 'jose', 'kaique', 'tiago', 'gustavo', 'tereza']
const splice1 = array1.splice(3)
console.log(splice1)

const array2 = ['Tereza', 'cristina']
console.log(array1.concat(array2))

//spread também funciona:
const array3 = [...array1, ...array2, ...['1', 2, 3]]
console.log(array3)