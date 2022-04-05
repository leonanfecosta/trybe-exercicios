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

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */
function mouseOver() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "bold";
  });
}
function mouseOut() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}

mouseOver();
mouseOut();

/* Exercício 7
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */
function newTask(task) {
  let taskContainer = document.querySelector(".my-tasks");
  let taskName = document.createElement("span");

  taskName.innerHTML = task;
  taskContainer.appendChild(taskName);
}
newTask("Projeto");

/* Exercício 8
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function newTaskDiv(color) {
  let taskContainer = document.querySelector(".my-tasks");
  let newTask = document.createElement("div");

  newTask.className = "task";
  newTask.style.backgroundColor = color;
  taskContainer.appendChild(newTask);
}
newTaskDiv("rgb(0, 102, 51)");

/* Exercício 9
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
 */

function setTaskClass() {
  let selectedTask = document.getElementsByClassName("task selected");
  let myTasks = document.querySelector(".task");

  myTasks.addEventListener("click", function (event) {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}

setTaskClass();

/* Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) . */

function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected"); // seleciona a div da tarefa clicada
  let days = document.querySelector("#days"); //seleciona a lista de dias
  let taskDiv = document.querySelector(".task"); // div que está a tarefa
  let taskColor = taskDiv.style.backgroundColor; // seleciona a cor da tarefa clicada

  days.addEventListener("click", function (event) {
    let eventTargetColor = event.target.style.color; //seleciona a cor que está nos dias

    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      //se a div da tarefa estiver selecioanda e a cor do dia for diferente da cor da tarefa
      let color = selectedTask[0].style.backgroundColor; // adcionar a cor que esta na tarefa selecionada a uma variavel
      event.target.style.color = color; //atribui a cor ao dia clicado
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      //se a cor do dia for igual a cor da tarefa e tiver alguma tarefa selecionada
      event.target.style.color = "rgb(119,119,119)"; //retona a cor original
    }
  });
}
setDayColor();

/* Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado. */
function addNewTasks() {
  let getInputContainer = document.querySelector("#task-input"); //seleciona o elemento pai do input
  let getInputButton = document.querySelector("#btn-add"); // seleciona o elemento botao adicionar
  let getTaskList = document.querySelector(".task-list"); // seleciona a ul onde as tarefas estão no html

  getInputButton.addEventListener("click", function () {
    if (getInputContainer.value.length > 0) {
      //se o campo input não estiver vazio
      let newLi = document.createElement("li"); //cria uma nova li dentro da ul
      newLi.innerHTML = getInputContainer.value; //adiona o valor do input a li

      getTaskList.appendChild(newLi); // adiciona a li como filha da ul
      getInputContainer.value = ""; // zera o valor do input depois depois de adiconada
    } else {
      alert("Error! Digite alguma tarefa!");
    }
  });

  getInputContainer.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && getInputContainer.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputContainer.value;

      getTaskList.appendChild(newLi);
      getInputContainer.value = "";
    }
  });
}
addNewTasks();
