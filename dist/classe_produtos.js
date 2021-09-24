"use strict";
/*1) Crie uma classe com os atributos produto, preço, quantidade), Crie os métodos
getters e setters. Crie validação para não aceitar nome em branco, preco e
quantidade com valor 0 (zero). Considerando quesão oferecidos descontos pelo
número de quantidade comprada, seguindo a tabela abaixo:
a. Até 10 unidades: não tem desconto
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
Imprima a seguinte mensagem: O produto xxx de preço 999, quantidade comprada
de 999 teve o desconto de 999 e o valor pago foi de 99999*/
var Produtos = /** @class */ (function () {
    function Produtos(produto, preco, quantidade) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produtos.prototype.getProduto = function () {
        return this.produto;
    };
    Produtos.prototype.getPreco = function () {
        return this.preco;
    };
    Produtos.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Produtos.prototype.setProduto = function (produto) {
        if (produto.length < 1) {
            throw new Error('Informe um produto válido');
        }
        this.produto = produto;
    };
    Produtos.prototype.setPreco = function (preco) {
        if (preco < 1) {
            throw new Error('Informe um preço válido');
        }
        this.preco = preco;
    };
    Produtos.prototype.setQuantidade = function (quantidade) {
        if (quantidade < 1) {
            throw new Error('Informe uma quantidade válida');
        }
        this.quantidade = quantidade;
    };
    Produtos.prototype.calculaDesconto = function () {
        var desconto = 0;
        if (this.quantidade < 10) {
            return desconto = 0;
        }
        else if (this.quantidade > 10 && this.quantidade < 20) {
            return desconto = (this.preco / 100) * 10;
        }
        else if (this.quantidade > 20 && this.quantidade < 50) {
            return desconto = (this.preco / 100) * 20;
        }
        else {
            return desconto = (this.preco / 100) * 25;
        }
    };
    Produtos.prototype.calculoTotal = function () {
        return "Para o produto " + this.produto + " de pre\u00E7o " + this.preco + ", quantidade comprada de " + this.quantidade + " teve desconto de " + this.calculaDesconto() + " e o valor pago foi de " + (this.preco - this.calculaDesconto());
    };
    return Produtos;
}());
var produto1 = new Produtos('Notebook Dell', 4000, 5);
var produto2 = new Produtos('Camisa Flamengo', 200, 30);
try {
    produto1.setProduto('');
    produto1.setPreco(0);
    produto1.setQuantidade(0);
}
catch (err) {
    console.log(err.message);
}
console.log(produto1.calculoTotal());
console.log(produto2.calculoTotal());
