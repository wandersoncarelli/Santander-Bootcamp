// Solução 01
function substituirPares(array) {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                array[i] = 0;
            }
        }
        console.log(array);
    } else {
        console.log(-1);
    }
}

let numbers = [1, 3, 4, 6, 80, 33, 23, 90];
substituirPares(numbers);

// Solução 02
function substituirPares2(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    return array;
}

let array2 = true;
console.log(substituirPares2(array2));
