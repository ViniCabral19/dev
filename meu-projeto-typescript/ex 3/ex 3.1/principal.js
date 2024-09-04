"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var pedido_1 = require("./pedido");
var clienteExemplo = new cliente_1.Cliente('Lucas', 'lucas@gmail.com');
var pedidoExemplo = new pedido_1.Pedido(clienteExemplo, 'Notebook', 4500);
console.log(pedidoExemplo.exibirPedido());
