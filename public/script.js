// 1) Dados iniciais
let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda) || renda <= 0) {
  renda = Number(prompt("Valor inválido. Digite uma renda mensal válida:"));
}

let quantidadeDespesas = Number(prompt("Quantas despesas você quer informar?"));
while (isNaN(quantidadeDespesas) || quantidadeDespesas <= 0 || !Number.isInteger(quantidadeDespesas)) {
  quantidadeDespesas = Number(prompt("Valor inválido. Digite uma quantidade inteira válida de despesas:"));
}

// Regra da atividade: limitar entre 1 e 5
if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

// 2) Lançamento de despesas com for
let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

  while (isNaN(despesa) || despesa < 0) {
    despesa = Number(prompt(`Valor inválido. Digite o valor da despesa ${i}:`));
  }

  totalDespesas += despesa;
}

// 3) Cálculo da sobra
let sobra = renda - totalDespesas;

// 4) Classificação com if / else
let mensagemClassificacao = "";

if (totalDespesas > renda) {
  mensagemClassificacao = "Atenção: você gastou mais do que ganhou!";
} else {
  if (sobra > renda * 0.3) {
    mensagemClassificacao = "Ótimo: boa margem de sobra!";
  } else {
    mensagemClassificacao = "Ok: dá pra melhorar a sobra.";
  }
}

// 5) Saída final
let resultado =
  "===== RESUMO DO ORÇAMENTO =====\n" +
  "Nome: " + nome + "\n" +
  "Renda mensal: R$ " + renda.toFixed(2) + "\n" +
  "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra do mês: R$ " + sobra.toFixed(2) + "\n" +
  "Classificação: " + mensagemClassificacao;

alert(resultado);
console.log(resultado);