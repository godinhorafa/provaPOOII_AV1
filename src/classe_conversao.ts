/* 2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão
 das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
retornar o valor em segundos.
• 1 minuto = 60 segundos
• 1 hora = 60 minutos
• 1 dia = 24 horas
• 1 semana = 7 dias
• 1 mês = 30 dias
• 1 ano = 365.25 dias */

class ConversaoDeUnidadesDeTempo {

    private valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    public static minutosParaSegundos(valor:number) {
        return `${valor} minutos equivalem a ${valor*60} segundos`
    }
    public static horaParaMinutos(valor:number) {
        return `${valor} horas equivalem a ${valor*60} minutos`
    }
    public static diaParaHoras(valor:number) {
        return `${valor} dias equivalem a ${valor*24} horas`
    }
    public static semanaParaDias(valor:number) {
        return `${valor} semanas equivalem a ${valor*7} dias`
    }
    public static mesParaDias(valor:number) {
        return `${valor} meses equivalem a ${valor*30} dias`
    }
    public static anoParaDias(valor:number) {
        return `${valor} anos equivalem a ${valor*365.25} dias`
    }
}

ConversaoDeUnidadesDeTempo.minutosParaSegundos(120)