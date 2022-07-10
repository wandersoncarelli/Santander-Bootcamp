// Tratamento de strings
let nome = "João";
let sobrenome = "Pedro";
let concatenado = nome.concat(sobrenome); // Concatenando as variáveis "nome" e "sobrenome"

console.log(concatenado);
console.log(typeof concatenado); // Tipo de dado da variável "contatenado"
console.log(concatenado.length); // Quantidade de caracteres da variável "concatenado"
console.log(nome[2]); // Exibindo a letra da variável "nome" correspondente ao número do índice

concatenado = nome + " " + sobrenome; // Concatenando
console.log(concatenado);

concatenado = nome + "\n" + sobrenome // Concatenando com quebra de linha
console.log(concatenado);

concatenado = `${nome} ${sobrenome}` // Concatenando
console.log(concatenado);

concatenado = `${nome} 

${sobrenome}`; // Concatenando com quebra de linha
console.log(concatenado);

concatenado = "\"" // Exibindo a aspa (") no console
console.log(concatenado);

let frase = "Olá, tudo bem?";
console.log(frase.split("")); // Dividindo a frase letra por letra
console.log(frase.split(" ")); // Dividindo a frase por espaços
console.log(frase.includes("tudo")); // Verifica se existe a palavra "tudo" na frase
console.log(frase.startsWith("O")); // Verifica se a frase começa com a letra "O", retorna "true" ou "false"
console.log(frase.startsWith("R")); // Verifica se a frase começa com a letra "R", retorna "true" ou "false"
console.log(frase.endsWith("?")); // Verifica se a frase termina com o "?", retorna "true" ou "false"
console.log(frase.replace(",", "!")); // Substitui caracteres da frase

let stringModificada = frase.replace(",", "!"); // Substitui caracteres da frase e armazena na variável
console.log(frase);
console.log(stringModificada);
