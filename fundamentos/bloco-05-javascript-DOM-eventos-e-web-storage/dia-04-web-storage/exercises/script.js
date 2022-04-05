// Aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
//As pessoas devem ter o poder de alterar:

window.onload = function () {
  //   -------------------------- Definindo as funções ----------------------------

  //Cor de fundo da tela;
  function setBackgroundColor(color) {
    let content = document.querySelector(".content");
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  }

  //Cor do texto;
  function setFontColor(color) {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
    }
    localStorage.setItem("fontColor", color);
  }

  //Tamanho da fonte;
  function setFontSize(size) {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontSize = size;
    }
    localStorage.setItem("fontSize", size);
  }

  //Espaçamento entre as linhas do texto;
  function setLineHeight(height) {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.lineHeight = height;
    }
    localStorage.setItem("lineHeight", height);
  }

  // Tipo da fonte ( Font family ).
  function setFontFamily(family) {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontFamily = family;
    }
    localStorage.setItem("fontFamily", family);
  }

  /* ----------------------------- Definindo as ações dos botões ---------------------*/

  //Cor de fundo
  let bgColorButtons = document.querySelectorAll("#background-color");
  for (let i = 0; i < bgColorButtons.length; i += 1) {
    bgColorButtons[i].addEventListener("click", function (event) {
      setBackgroundColor(event.target.innerHTML);
    });
  }

  //Cor da fonte
  let fontColorButtons = document.querySelectorAll("#font-color");
  for (let i = 0; i < fontColorButtons.length; i += 1) {
    fontColorButtons[i].addEventListener("click", function (event) {
      setFontColor(event.target.innerHTML);
    });
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size");
  for (let i = 0; i < fontSizeButtons.length; i += 1) {
    fontSizeButtons[i].addEventListener("click", function (event) {
      setFontSize(event.target.innerHTML);
    });
  }

  // Espaçamento entre linhas
  let lineHeightButtons = document.querySelectorAll("#line-height");
  for (let i = 0; i < lineHeightButtons.length; i += 1) {
    lineHeightButtons[i].addEventListener("click", function (event) {
      setLineHeight(event.target.innerHTML);
    });
  }

  // Tipo da fonte
  let fontFamilyButtons = document.querySelectorAll("#font-family");
  for (let i = 0; i < fontFamilyButtons.length; i += 1) {
    fontFamilyButtons[i].addEventListener("click", function (event) {
      setFontFamily(event.target.innerHTML);
    });
  }
  /* ------------------------ inicializa todas as funções -----------------------*/
  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor");
    if (backgroundColor) setBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem("fontColor");
    if (fontColor) setFontColor(fontColor);

    let fontSize = localStorage.getItem("fontSize");
    if (fontSize) setFontSize(fontSize);

    let lineHeight = localStorage.getItem("lineHeight");
    if (lineHeight) setLineHeight(lineHeight);

    let fontFamily = localStorage.getItem("fontFamily");
    if (fontFamily) setFontFamily(fontFamily);

  }
  initialize();
};
