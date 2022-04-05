/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => document.getElementById('jokeContainer')
      .innerText = data.joke);
};

fetchJoke();
