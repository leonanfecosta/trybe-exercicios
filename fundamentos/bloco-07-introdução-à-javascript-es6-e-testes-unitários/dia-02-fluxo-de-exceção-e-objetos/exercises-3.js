const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKeyValue = (obj, key, value) => (obj[key] = value);
addKeyValue(lesson2, "turno", "noite");
//   console.table(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKey = (obj) => Object.keys(obj);
// console.log(listKey(lesson2));

//Crie uma função para mostrar o tamanho de um objeto.
const sizeObj = (obj) => Object.keys(obj).length;
// console.log(sizeObj(lesson3));


//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) => Object.values(obj);
// console.log(listValues(lesson1));

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const getNumbersOfStudents = (obj) =>{
    let total = 0;
    const array = Object.keys(obj); // retorna um array com todas as keys (lesson1, lesson2 e lesson3)
    for (index in array) { //itera sobre o array criado
      total += obj[array[index]].numeroEstudantes; //percorre cada posição dos objetos dentro do objetos allLessons, passando por cada chave gerada do array e acessa propriedade numero de estudantes para realizar a soma
    }
    return total;
  };
//   console.log(getNumbersOfStudents(allLessons));

  //Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
  const getValueByNumber = (obj, number) => Object.values(obj)[number];
//   console.log(getValueByNumber(lesson2, 0));

  //Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);//tranforma o objeto em um array de arrays
    let isEquals = false;
    console.log(arr);

    for (let index in arr) { //percorre o array gerado
        if (arr[index][0] === key && arr[index][1] === value) isEquals = true;
    }
    return isEquals;
};
console.log(verifyPair(lesson1,'professor','Bruno'));
