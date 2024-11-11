console.log('Djavan sempre')
let valor1 = 5;
let valor2 = 6;
console.log ('o valor 1 é: '+valor1);
console.log ('o valor 2 é: '+valor2);
let soma = valor1 + valor2;
console.log('A soma dos valores é: '+ soma);

// Exemplos de Variáveis
let nome = 'Mell';
console.log('Olá! ' + nome);

//Exemplo Array
let dados = [2024, 'Técnico', 9.5, 'Redes'];
console.log('Os valores do Array são: ' + dados);
console.log('O primeiro valor do Array é: ' + dados[0]);

//Estruturas Lógicas e Condicionais
if (nome === 'Mell' && dados[2] >= 9.5) {
    console.log('Parabéns!');
} else {
    console.log('Não foi dessa vez');
}

// Alerta na tela
alert('Seja bem vindo! ' + nome);

let botaoAlternar = document.querySelector('#modo-noturno');
let elementoAlterado = document.querySelector('body');

botaoAlternar.addEventListener ('click', () => {
    let alterar = botaoAlternar.checked ? 'dark' : 'light' 
    elementoAlterado.setAttribute("data-bs-theme", alterar)
})