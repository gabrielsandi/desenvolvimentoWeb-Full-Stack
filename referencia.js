let listaA = [1,2,3];

let listaB = listaA;
listaB[0] = 99;

console.log(listaB);
console.log(listaA);

// let string = 'Olá';
// let mensagem = string;
// mensagem = 'Olá bem vindo';

// console.log(mensagem);
// console.log(string);

let objA = {nome: 'Milene'};
let objB = objA;
objB.idade =34;

console.log(objB);
console.log(onjA);

let listaC = [...listaA];
console.log(listaC);
listaC[3] = 100;

console.log(listaC);
console.log(listaA);

let objC = {...objA};
objC.corDeCabelo = 'castanho';
console.log(objC);
console.log(objA);
