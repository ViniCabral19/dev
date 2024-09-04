var formapagamento = 'dinheiro';
function ProdutoPagamento(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o: R$").concat(produto.preco.toFixed(2), ", \n    Forma de Pagamento: ").concat(pagamento, ".");
}
var produtoExemplo = { nome: 'Pão', preco: 2, categoria: 'Alimentos' };
var formaPagamentoExemplo = 'cartão';
console.log(ProdutoPagamento(produtoExemplo, formaPagamentoExemplo));
