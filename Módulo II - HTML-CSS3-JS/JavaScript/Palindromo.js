// Verificar Palíndromo

// Solução 01
function verificaPalindromo(string) {
    if(!string) return "String inválida.";

    let reverse = string.split("").reverse().join("")
    string.toLowerCase() === reverse.toLowerCase() ? console.log(`A string ${string} é um palíndromo.`) : console.log(`A string ${string} não é um palíndromo.`)

}

verificaPalindromo("Ana");

// Solução 02
function verificaPalindromo2(string) {
    if(!string) return "String inválida.";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo2("ana"));

// Solução 03
function verificaPalindromo3(string) {
    if(!string) return "String inválida.";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo3("gato"));
