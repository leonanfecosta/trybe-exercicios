import React from "react";

class Exercicio1 extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: undefined,
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  async componentDidMount() {
    await this.fetchDog();
  }

  async fetchDog() {
    this.setState({ loading: true }, async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      this.setState({
        loading: false,
        dog: data,
      });
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

export default Exercicio1;
