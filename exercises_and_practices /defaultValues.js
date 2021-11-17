function some(a, b) {
    b = b || 0;
    console.log(a + b)
}

function some2(a, b = 0) {
    console.log(a + b)
}

some(10)
some2(10)