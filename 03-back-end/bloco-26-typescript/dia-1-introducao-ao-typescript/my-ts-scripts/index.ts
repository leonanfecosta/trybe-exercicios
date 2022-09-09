import { exit } from 'process';
import readline from 'readline-sync';
import Months from './Months';
import Seasons from './Seasons';

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano');

const seasonsSouth = {
  [Seasons.Outono]: [Months.Marco, Months.Abril, Months.Maio, Months.Junho],
  [Seasons.Inverno]: [Months.Julho, Months.Agosto, Months.Setembro],
  [Seasons.Primavera]: [Months.Setembro, Months.Outubro, Months.Novembro],
  [Seasons.Verão]: [Months.Dezembro, Months.Janeiro, Months.Fevereiro, Months.Marco],
}

const seasonsNorth = {
  [Seasons.Outono]: seasonsSouth[Seasons.Primavera],
  [Seasons.Inverno]: seasonsSouth[Seasons.Verão],
  [Seasons.Primavera]: seasonsSouth[Seasons.Outono],
  [Seasons.Verão]: seasonsSouth[Seasons.Inverno],
}

const hemsispheres = {
  "Sul": seasonsSouth,
  "Norte": seasonsNorth,
}

const choiceHemisphere = readline.keyInSelect(
  Object.keys(hemsispheres),
  'Escolha um hemisfério'
);

const month = Object.values(Months)[choiceMonth];
const hemisphere = Object.keys(hemsispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemsispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
        if (months.includes(month)) console.log(seasons);
});
