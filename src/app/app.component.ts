import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.setTranslation({
            startsWith: "Começa com",
            contains: "Contém",
            notContains: "Não contém",
            endsWith: "Termina com",
            equals: "Igual a",
            notEquals: "Diferente de",
            noFilter: "Sem filtro",
            lt: "Menor que",
            lte: "Menor ou igual a",
            gt: "Maior que",
            gte: "Maior ou igual a",
            is: "É",
            isNot: "Não é",
            before: "Antes",
            after: "Depois",
            dateIs: "Data é",
            dateIsNot: "Data não é",
            dateBefore: "Data é antes de",
            dateAfter: "Data é depois de",
            clear: "Limpar",
            apply: "Aplicar",
            matchAll: "Corresponder a todos",
            matchAny: "Corresponder a qualquer",
            addRule: "Adicionar regra",
            removeRule: "Remover regra",
            accept: "Aceitar",
            reject: "Rejeitar",
            choose: "Escolher",
            upload: "Enviar",
            cancel: "Cancelar",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],

            firstDayOfWeek: 0, // Domingo é o primeiro dia da semana
            today: "Hoje",
            weekHeader: "Sem",
            weak: "Fraca",
            medium: "Média",
            strong: "Forte",
            passwordPrompt: "Digite a senha",
            emptyMessage: "Nenhum resultado encontrado",
            emptyFilterMessage: "Nenhuma opção disponível"
        });
    }
}
