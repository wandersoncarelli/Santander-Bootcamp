// Tratamento de objetos
let obj = {}; // Declaração de objeto

obj.name = "Wanderson"; // Definindo a chave e valor do objeto
console.log(obj); // Exibindo todas as chaves e valores do objeto no console
console.log(obj.name); // Exibindo o valor da chave "name" no console

obj.age = 26;
console.log(obj);

console.log(Object.values(obj)); // Exibindo apenas os valores do objeto "obj" no console
console.log(Object.keys(obj)); // Exibindo apenas as chaves do objeto "obj" no console

// Declarando objeto com as chaves e valores definidos
let person = {
    name: "Wanderson",
    age: 26,
    address: "Rua do endereço"
}
console.log(person);
console.log(person.name);
console.log(person["name"]); // Exibindo o valor da chave "name" no console

person["numberOfSiblings"] = 3; // Definindo a chave e valor do objeto
console.log(person);

let mom = "nameOfMom";
person[mom] = "Maria" // Utilizando o valor da variável como chave para o objeto
console.log(person);
