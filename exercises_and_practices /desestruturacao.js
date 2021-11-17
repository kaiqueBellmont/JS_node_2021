const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [um, dois] = numeros
console.log(um, dois)

//                  0          1          2
//               0  1  2    3  4  5    6  7  8
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = matrix
console.log(seis)
//easly way
const [list1, list2, list3] = matrix
console.log(list2[2])


