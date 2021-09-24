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

class Produtos {

    private produto: string;
    private preco: number;
    private quantidade: number;

    constructor(produto:string, preco: number, quantidade: number) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public getProduto() {
        return this.produto
    }

    public getPreco() {
        return this.preco
    }

    public getQuantidade() {
        return this.quantidade
    }

    public setProduto(produto: string) {
        if (produto.length < 1) {
            throw new Error('Informe um produto válido')
        }
        this.produto = produto
    }

    public setPreco(preco: number) {
        if (preco < 1) {
            throw new Error('Informe um preço válido')
        }
        this.preco = preco
    }

    public setQuantidade(quantidade: number) {
        if (quantidade < 1) {
            throw new Error('Informe uma quantidade válida')
        }
        this.quantidade = quantidade
    }

    public calculaDesconto():number {

        let desconto = 0;
        if (this.quantidade < 10) {
            return desconto = 0;
        } else if (this.quantidade > 10 && this.quantidade < 20) {
            return desconto = (this.preco/100)*10
        } else if (this.quantidade > 20 && this.quantidade < 50) {
            return desconto = (this.preco/100)*20
        } else {
            return desconto = (this.preco/100)*25
        }
    }

    public calculoTotal() {
        return `Para o produto ${this.produto} de preço ${this.preco}, quantidade comprada de ${this.quantidade} teve desconto de ${this.calculaDesconto()} e o valor pago foi de ${this.preco - this.calculaDesconto()}`
    }
}

const produto1 = new Produtos('Notebook Dell', 4000, 5)
const produto2 = new Produtos('Camisa Flamengo', 200, 30)


try {
    produto1.setProduto('')
    produto1.setPreco(0)
    produto1.setQuantidade(0)
} catch (err:any) {
    console.log(err.message)
}


console.log(produto1.calculoTotal())
console.log(produto2.calculoTotal())

