"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var financeiro_1 = require("./financeiro");
var orcamentoExemplo = new financeiro_1.Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());
var valorComImposto = financeiro_1.Financeiro.calcularImposto(5000, 0.15);
console.log("Valor com Imposto: R$".concat(valorComImposto.toFixed(2)));
var valorComDesconto = financeiro_1.Financeiro.calcularDesconto(5000, 0.10);
console.log("Valor com Desconto: R$".concat(valorComDesconto.toFixed(2)));
