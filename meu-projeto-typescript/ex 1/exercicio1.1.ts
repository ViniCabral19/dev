interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix'

const formapagamento: FormaPagamento = 'dinheiro';


function ProdutoPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, 
    Forma de Pagamento: ${pagamento}.`;
}
const produtoExemplo: Produto = { nome: 'Pão', preco: 2, categoria: 'Alimentos' };

const formaPagamentoExemplo: FormaPagamento = 'cartão';

console.log(ProdutoPagamento(produtoExemplo, formaPagamentoExemplo));
