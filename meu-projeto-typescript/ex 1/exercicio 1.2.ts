type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};
type PessoaEmpregado = Pessoa & Empregado;

function InformacoesEmpregado(empregado: PessoaEmpregado): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}

const pessoaEmpregadaExemplo: PessoaEmpregado = { nome: 'Vinicius', idade: 21, empresa: 'Fiap', salario: 2000 };
console.log(InformacoesEmpregado(pessoaEmpregadaExemplo));