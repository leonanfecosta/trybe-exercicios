"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
const monthsNames = Object.values(Months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano');
const seasonsSouth = {
    [Seasons_1.default.Outono]: [Months_1.default.Marco, Months_1.default.Abril, Months_1.default.Maio, Months_1.default.Junho],
    [Seasons_1.default.Inverno]: [Months_1.default.Julho, Months_1.default.Agosto, Months_1.default.Setembro],
    [Seasons_1.default.Primavera]: [Months_1.default.Setembro, Months_1.default.Outubro, Months_1.default.Novembro],
    [Seasons_1.default.Verão]: [Months_1.default.Dezembro, Months_1.default.Janeiro, Months_1.default.Fevereiro, Months_1.default.Marco],
};
const seasonsNorth = {
    [Seasons_1.default.Outono]: seasonsSouth[Seasons_1.default.Primavera],
    [Seasons_1.default.Inverno]: seasonsSouth[Seasons_1.default.Verão],
    [Seasons_1.default.Primavera]: seasonsSouth[Seasons_1.default.Outono],
    [Seasons_1.default.Verão]: seasonsSouth[Seasons_1.default.Inverno],
};
const hemsispheres = {
    "Sul": seasonsSouth,
    "Norte": seasonsNorth,
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemsispheres), 'Escolha um hemisfério');
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemsispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemsispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
