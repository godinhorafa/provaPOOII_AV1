# Avaliação 1 da disciplina de Programação Orientada a Objeto II

1) Crie uma classe com os atributos produto, preço, quantidade), Crie os métodos
getters e setters. Crie validação para não aceitar nome em branco, preco e
quantidade com valor 0 (zero). Considerando quesão oferecidos descontos pelo
número de quantidade comprada, seguindo a tabela abaixo:
a. Até 10 unidades: não tem desconto
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
Imprima a seguinte mensagem: O produto xxx de preço 999, quantidade comprada
de 999 teve o desconto de 999 e o valor pago foi de 99999
2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão
 das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
retornar o valor em segundos.
• 1 minuto = 60 segundos
• 1 hora = 60 minutos
• 1 dia = 24 horas
• 1 semana = 7 dias
POO II - 5o - 1a AVD - TypeScript - 2021-1 2
• 1 mês = 30 dias
• 1 ano = 365.25 dias
3) Crie uma classe de Funcionários com os atributos nome, salario hora, dias
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
999 e o salário líquido de 9999
