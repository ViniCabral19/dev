import { Cliente } from './cliente';
import { Pedido } from './pedido';
const clienteExemplo = new Cliente('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 4500);
console.log(pedidoExemplo.exibirPedido());