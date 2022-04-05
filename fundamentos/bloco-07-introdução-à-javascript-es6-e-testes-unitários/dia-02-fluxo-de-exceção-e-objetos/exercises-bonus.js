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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//   Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getNumbersOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].materia === "Matemática") {
      total += array[index].numeroEstudantes;
    }
  }
  return total;
};

console.log(getNumbersOfStudentsMath(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);

  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia);
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
};

const createObject = (obj, name) => {
  const resultObj = {}; //cria um objeto vazio
  resultObj.professor = name; //cria a chave professor dentro do objeto vazio e atibui o valor name
  Object.assign(resultObj, getInfo(obj, name)); //utiliza o metodo assing para clonar o objeto gerado na função getinfo com o mesmos parametros e passar as informções para o resultObj
  return resultObj;
};

console.log(createObject(allLessons, "Carlos"));
