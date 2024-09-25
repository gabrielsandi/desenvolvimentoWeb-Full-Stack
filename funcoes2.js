// function nomeFuncao() { instrução } - Sintaxe básica

// Mensagem para iniciaro cadastro
function enviarMensagem() {
    console.log('Para continuar você precisa informar o seu nome para cadastro');
}

enviarMensagem();

// Cadastro de usuário

function cadastrar(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}, você foi cadastrado com sucesso!`);
}

// cadastrar('Millene', 'Galetti');

// operação matemáticas

function banco(deposito, saque) {
    let saldo = dposito - saque;
    return saldo;
}

// console.log(banco(1000, 60));

// função principal

function main () {
    enviarMensagem();
    cadastrar('Daniel', 'Porto');
    let banco = banco(10000, 780);
    console.log(`O saldo atual da sua conta é de ${saldo} reais`);
}

main();
