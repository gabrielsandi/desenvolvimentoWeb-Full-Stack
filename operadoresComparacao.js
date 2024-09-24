// Igualdade e Estrita Igualdade
console.log(5 == "5");
//console.log(5+"5");
console.log(5 === "5"); // boa prática
//console.log(5+5);

console.log(5 != "5");
console.log(5 !== "5"); // boa prática

// Maior e Menor
//console.log(10 > 20); // False
//console.log(10 > 10); // False
//console.log(10 >= 10); // True
//console.log(10 < 20); // True
//console.log(10 < 10); // False
console.log(10 <= 10); // True

//let senha = 1234;
let senha = "Maçã";
//let senhaDigitada = 12345;
//let senhaDigitada = 1234;
//let senhaDigitada = "1234";
//let senhaDigitada = "Banana";
let senhaDigitada = "Maçã";
let comparacao = senha === senhaDigitada;
console.log("Aqui é a minha senha:" + comparacao);