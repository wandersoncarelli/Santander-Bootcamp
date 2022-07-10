// Tratamento de valores booleanos
let validation = 3 === 0; // Define o valor booleano para verificação se 3 é igual a 0

console.log(validation);

validation = 3 === 3;
console.log(validation);

validation = 3 > 4;
console.log(validation);

validation = 3 > 2;
console.log(validation);

validation = 3 >= 2;
console.log(validation);

console.log(typeof validation);
let validationString = validation.toString(); // É possível transformar em uma string
console.log(typeof validation);
console.log(typeof validationString);

console.log(!validation); // Com o "!" exibe o valor contrário ao resultado
console.log(!true);
console.log(!false);
