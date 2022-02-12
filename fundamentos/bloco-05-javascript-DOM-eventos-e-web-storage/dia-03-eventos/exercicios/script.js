function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*   Exercício 1:
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

let dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");

    if (day === 24 || day === 31) {
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");

  newButton.innerText = buttonName;
  newButton.id = "btn-holiday";
  buttonContainer.appendChild(newButton);
}
createHolidayButton("Feriados");

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */

function displayHolidays() {
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday");
  let originalColor = "rgb(238,238,238)";
  let newColor = "rgb(153, 194, 255)";

  getHolidayButton.addEventListener("click", function () {
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === newColor) {
        getHolidays[i].style.backgroundColor = originalColor;
      } else {
        getHolidays[i].style.backgroundColor = newColor;
      }
    }
  });
}
displayHolidays();

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */
function creatFridayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");

  newButton.innerHTML = buttonName;
  newButton.id = "btn-friday";

  buttonContainer.appendChild(newButton);
}

creatFridayButton("Sextou?");

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function displayFridays(dezFridays) {
  let getFridayButton = document.querySelector("#btn-friday");
  let getFriday = document.getElementsByClassName("friday");
  let newText = "Sextou! o/";

  getFridayButton.addEventListener("click", function () {
    for (let i = 0; i < getFriday.length; i += 1) {
      if (getFriday[i].innerHTML !== newText) {
        getFriday[i].innerHTML = newText;
      } else {
        getFriday[i].innerHTML = dezFridays[i];
      }
    }
  });
}
let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);
