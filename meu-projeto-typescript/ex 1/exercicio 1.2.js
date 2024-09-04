function InformacoesEmpregado(empregado) {
    return "Nome: ".concat(empregado.nome, ", Idade: ").concat(empregado.idade, ", Empresa: ").concat(empregado.empresa, ", Sal\u00E1rio: R$").concat(empregado.salario.toFixed(2), ".");
}
var pessoaEmpregadaExemplo = { nome: 'Vinicius', idade: 21, empresa: 'Fiap', salario: 2000 };
console.log(InformacoesEmpregado(pessoaEmpregadaExemplo));
