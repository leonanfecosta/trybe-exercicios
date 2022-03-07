const encode = (string) => {
  let letters = string.split("");
  let arrayWords = [];

  for (let index in letters) {
    if (
      letters[index] !== "a" &&
      letters[index] !== "e" &&
      letters[index] !== "i" &&
      letters[index] !== "o" &&
      letters[index] !== "u"
    ) {
      arrayWords.push(letters[index]);
    } else if (letters[index] === "a") {
      letters[index] = 1;
      arrayWords.push(letters[index]);
    } else if (letters[index] === "e") {
      letters[index] = 2;
      arrayWords.push(letters[index]);
    } else if (letters[index] === "i") {
      letters[index] = 3;
      arrayWords.push(letters[index]);
    } else if (letters[index] === "o") {
      letters[index] = 4;
      arrayWords.push(letters[index]);
    } else if (letters[index] === "u") {
      letters[index] = 5;
      arrayWords.push(letters[index]);
    }
  }
  return arrayWords.join("");
};

const decode = (string) => {
  let letters = string.split("");
  let arrayWords = [];

  for (let index in letters) {
    if (
      letters[index] !== "1" &&
      letters[index] !== "2" &&
      letters[index] !== "3" &&
      letters[index] !== "4" &&
      letters[index] !== "5"
    ) {
      arrayWords.push(letters[index]);
    } else if (letters[index] === "1") {
      letters[index] = "a";
      arrayWords.push(letters[index]);
    } else if (letters[index] === "2") {
      letters[index] = "e";
      arrayWords.push(letters[index]);
    } else if (letters[index] === "3") {
      letters[index] = "i";
      arrayWords.push(letters[index]);
    } else if (letters[index] === "4") {
      letters[index] = "o";
      arrayWords.push(letters[index]);
    } else if (letters[index] === "5") {
      letters[index] = "u";
      arrayWords.push(letters[index]);
    }
  }
  return arrayWords.join("");
};

module.exports = {encode, decode}