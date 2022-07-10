// Tratamento de valores Empty (Vazio), Undefined (Indefinido) e Null (Nulo)
// Valores "Empty" = Vazios/sem conteúdo (Numbers = 0, Strings = "", Arrays = [])
// Valores "Undefined" = Valores que não foram nem declarados, não existem
// Valores "Null" = Valores que não foram inicializados, propositalmente são falsos, nulos

console.log(typeof abacaxi); // Resultado = "Undefined" pois não foi declarado
let morango;
console.log(typeof morango); // Resultado = "Undefined" pois foi declarado mas não foi definido valor

let cenoura = "" // Variável com valor "Empty", pois foi definido como uma string, mas está vazia
console.log(typeof cenoura) // Resultado = "String"

abacaxi = null // Definindo valor "Null" pra variável
console.log(typeof abacaxi) // Resultado = "Object", pois quando uma variável é definida como nula, ela se torna objeto
console.log(abacaxi) // Exibindo o valor da variável no console

console.log(abacaxi === true); // Resultado = "False", pois o valor é nulo e não pode ser definido como booleano
console.log(abacaxi === false); // Resultado = "False", pois o valor é nulo e não pode ser definido como booleano

console.log(!abacaxi); // Resultado = "True", pois faz o tratamento "falsy", verificando se é um valor nulo ou vazio

console.log(undefined === false); // Resultado = "False", pois "undefined" não é a mesma coisa que "false"

