import React from "react";

class Exercicio2 extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: "",
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  async componentDidMount() {
    await this.fetchDog();
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

  componentDidUpdate(prevState) {
    localStorage.setItem("dog", this.state.dog.message);
    const breed = this.state.dog.message.split("/")[4];
    alert(`A raça do doguinho é ${breed}`);
  }

  async fetchDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    this.setState({
      loading: false,
      dog: data,
    });
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
          </div>
        )}
      </div>
    );
  }
}

export default Exercicio2;
