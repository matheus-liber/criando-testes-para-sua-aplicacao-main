import { formataMaiorLanceDoLeilao } from "../../../src/negocio/formatadores/lance";

describe("negocio/formatadores/lance", () => {

    describe("formataMaiorLanceDoLeilao", () => {

        it("deve retornar 100 quando o lance atual for 100 e os lances forem 20, 30 e 40", () => {
            const lances = [{valor: 20}, {valor: 30}, {valor: 40}];
            
            const resultado = formataMaiorLanceDoLeilao(lances, 100);

            expect(resultado).toBe(100);
        });

        it("deve retornar 40 quando o lance atual for 35 e os lances forem 20, 30 e 40", () => {
            const lances = [{valor: 20}, {valor: 30}, {valor: 40}];
            
            const resultado = formataMaiorLanceDoLeilao(lances, 35);

            expect(resultado).toBe(40);
        });

        it("deve retornar o lance atual quando ainda não houverem lances listados", () => {
            const lances = [];

            const resultado = formataMaiorLanceDoLeilao(lances, 10);
            expect(resultado).toBe(10);
        })

    });
});