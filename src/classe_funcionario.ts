/* 3) Crie uma classe de Funcionários com os atributos nome, salario hora, dias
trabalhados, total de faltas no ano. Crie os getters e setters.
Crie um método para calcular o salário bruto que será a multiplicação do salario
hora pelos dias trabalhados.
Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do
salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de
faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior
ou igual a 5 a PLR será zero.
Crie um método para calcular o desconto que será 5% do salário bruto.
Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
Imprima as seguintes mensagens
O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi
de 999
O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de
999 e o salário líquido de 9999 */

class Funcionarios {

    private nome: string;
    private salarioHora: number;
    private diasTrabalhados: number;
    private totalFaltasNoAno: number;

    constructor(nome: string, salarioHora: number, diasTrabalhados: number, totalFaltasNoAno: number) {
        this.nome = nome;
        this.salarioHora = salarioHora;
        this.diasTrabalhados = diasTrabalhados;
        this.totalFaltasNoAno = totalFaltasNoAno;
    }

    public getNome() {
        return this.nome
    }

    public getSalarioHora() {
        return this.salarioHora
    }

    public getDiasTrabalhados() {
        return this.diasTrabalhados
    }

    public getTotalFaltasNoAno() {
        return this.totalFaltasNoAno
    }

    public setNome(nome: string) {
        if (nome.length < 1) {
            throw new Error('Informe um nome válido')
        }
        this.nome = nome
    }

    public setSalarioHora(salarioHora: number) {
        if (salarioHora < 1) {
            throw new Error('Informe um salário válido')
        }
        this.salarioHora = salarioHora
    }

    public setDiasTrabalhados(diasTrabalhados: number) {
        if (diasTrabalhados < 1) {
            throw new Error('Informe um número de dias trabalhados válido')
        }
        this.diasTrabalhados = diasTrabalhados
    }

    public setTotalFaltasNoAno(totalFaltasNoAno: number) {
        if (totalFaltasNoAno < 0) {
            throw new Error('Informe um número de faltas válido')
        }
        this.totalFaltasNoAno = totalFaltasNoAno
    }

    public SalarioBruto():number {
        let salarioBruto = 0;
        return salarioBruto = this.salarioHora * this.diasTrabalhados
    }

    public calculoPLR():number {
        let plr = 0;

        if (this.totalFaltasNoAno < 1) {
            return plr = this.SalarioBruto()
        } else if (this.totalFaltasNoAno == 1) {
            return plr = (this.SalarioBruto()/100)*94
        } else if (this.totalFaltasNoAno == 2) {
            return plr = (this.SalarioBruto()/100)*92
        } else if (this.totalFaltasNoAno == 3) {
            return plr = (this.SalarioBruto()/100)*90
        } else if (this.totalFaltasNoAno == 4) {
            return plr = (this.SalarioBruto()/100)*88
        } else {
            return plr = 0;
        }
    }

    public calculoDesconto() {
        return (this.SalarioBruto()/100)*5
    }

    public calculoSalarioLiquido() {
        return this.SalarioBruto() + this.calculoPLR() - this.calculoDesconto()
    }

    public Mensagens() {
        console.log(`O funcionário de nome ${this.nome} tem salário bruto de ${this.SalarioBruto()}, teve ${this.totalFaltasNoAno} faltas e sua PLR foi de ${this.calculoPLR()}`)
        console.log(`O funcionário de nome ${this.nome} tem salário bruto de ${this.SalarioBruto()}, o desconto de ${this.calculoDesconto()}, a PLR de ${this.calculoPLR()} e o salário líquido de ${this.calculoSalarioLiquido()}`)
    }

}

const funcionario = new Funcionarios('Rafaella', 100, 220, 2)


try {
    funcionario.setNome('')
    funcionario.setSalarioHora(0)
    funcionario.setDiasTrabalhados(0)
    funcionario.setTotalFaltasNoAno(-1)
} catch (err:any) {
    console.log(err.message)
}

console.log(funcionario)
console.log(funcionario.Mensagens())