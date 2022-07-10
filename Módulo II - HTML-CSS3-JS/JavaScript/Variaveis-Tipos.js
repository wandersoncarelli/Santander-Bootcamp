// Declaração e reatribuição de variáveis

var firstName = "João"; // Declarações "var" tem escopo global, podem ser declaradas novamente
let lastName = "Souza"; // Declarações "let" tem escopo de bloco, não podem ser declaradas novamente, apenas atualizadas

if (firstName === "João") {
    let lastName = "Rodrigues";
    var firstName = "Pedro";
    last = "Silva"; // Reatribuindo o valor da variável

    console.log(lastName);
}

console.log(firstName, lastName);


// Hoisting (Atribuir valor à variável antes de ser declarada)

numberOne = 1; // Atribuindo valor a variável
console.log(numberOne + 2); // Exibindo a variável no console
var numberOne; // Declarando a variável


// Constantes

const FIRST_NAME = "Wanderson"; // São declaradas em "SNAKE_UPPER_CASE"
console.log(FIRST_NAME);