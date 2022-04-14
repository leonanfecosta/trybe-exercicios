import React from "react";

class Bonus extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: "",
      name: "",
      array: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveDog = this.saveDog.bind(this);

  }
  // a cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage . Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" , e exiba a última imagem guardada.

  async componentDidMount() {
    if(localStorage.dogs){
      const parseStorage = JSON.parse(localStorage.dogs);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      this.setState({
        array: parseStorage,
        dog: { message: lastDog },
        loading: false,
      });
    } else {
      this.fetchDog();
    }
  }

  // a cada tentativa de atualização do componente, verifique se o campo message tem a string terrier . Se sim, não atualize o componente;
  // se não, atualize o componente.
  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dog.message.includes("terrier")) {
      alert("Doguinho é um terrier, não vou mostrar");
      return false;
    }
    return true;
  }
  // após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message) ;
  // guarde a url da última imagem gerada no localStorage após cada atualização.

  componentDidUpdate(_prevProps, prevState) {
    if(prevState.dog.message !== this.state.dog.message){
      const breed = this.state.dog.message.split("/")[4];
      alert(`A raça do doguinho é ${breed}`);
    }
  }

  async fetchDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    this.setState({
      loading: false,
      dog: data,
    });
  }

  // a cada foto que for baixada, através de um input , dê um nome ao doguinho ;
  // guarde o nome do doguinho no localStorage após cada atualização.
  // guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada;

  saveDog() {
    const { name, array, dog: { message } } = this.state;
    const dogData = {name, message};
    const newArray = [...array, dogData];
    this.setState({ array: newArray, name: "" });
    localStorage.setItem("dogs", JSON.stringify(newArray));
  }

  render() {
    const { loading, dog } = this.state;
    return (
      <div className="App">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex">
            <img src={dog.message} alt="doguinho" />
            <button type="button" className="next-dog" onClick={this.fetchDog}>
              Próximo doguinho
            </button>
            <input type="text" className="input" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="digite o nome do doguinho" />
            <button type="button" className="save-dog" onClick={this.saveDog}>Salvar doguinho</button>
          </div>
        )}
      </div>
    );
  }
}

export default Bonus;
