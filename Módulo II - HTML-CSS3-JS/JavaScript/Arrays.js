// Tratamento de arrays
let array = []; // Criação da array

array.push(3); // Método "push" adiciona o valor ao final da array
console.log(array);

array.push(2);
console.log(array);

array.pop() // Método "pop" elimina o último elemento da array
console.log(array);

array.push(2);
array.push(5);
console.log(array);

array.shift(); // Método "shift" elimina o primeiro elemento da array
console.log(array);

array.unshift(1); // Método "unshift" adiciona o valor ao ínicio da array
console.log(array);

// Exibindo os valores do array com método for
for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log(array.includes(3)); // Verifica se o valor "3" está no array, retorna um valor booleano

console.log(array.every(item => item === 5)); // Método "every" verifica se todos os elementos são iguais a 5, retorna um valor booleano

console.log(array.some(item => item === 5)); // Método "some" verifica se algum dos elementos é igual a 5, retorna um valor booleano

console.log(array.reverse()); // Exibire o array em ordem inversa