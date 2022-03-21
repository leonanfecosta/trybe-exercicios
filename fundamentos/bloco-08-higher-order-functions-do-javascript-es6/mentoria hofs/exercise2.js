const data = require('./data2.js');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "Os Melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
  const {
    bandName,
    bestAlbuns
  } = data.bands[0];
  const albuns = bestAlbuns.reduce((acc, {
    name
  }) => {
    acc.push(name);
    console.log(acc);
    return acc;
  }, []);

  return `Os melhores álbuns do ${bandName}: ${albuns}`

}
console.log(getBestAlbuns());