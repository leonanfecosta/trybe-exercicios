const hydrate = (string) => {
  let numbers = string.match(/\d+/g).map(Number);
  let sum = 0;
  for (let index in numbers) {
    sum += numbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

module.exports = hydrate;
