const randomNumber = () => Math.floor(Math.random() * 100);
const firstFunction = (string) => string.toUpperCase();
const secondFunction = (string) => string.charAt(0);
const thirdFunction = (string1, string2) => string1.concat(string2);

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = {
  randomNumber,
  firstFunction,
  secondFunction,
  thirdFunction,
  fetchDog,
};
