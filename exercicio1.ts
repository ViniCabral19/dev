interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix'

const formapagamento: FormaPagamento = 'dinheiro';

const produto: Produto = {
    nome: 'batata',
    preco: 5,
    categoria: 'comida'
};