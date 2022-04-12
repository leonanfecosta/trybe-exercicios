import React from "react";
import Pokemon from "./Pokemon";
import data from "./data";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      numbersPokemon: data,
    };
  }

  nextPokemon = () => {
    const { numbersPokemon } = this.state;

    this.setState((prevState) => {
      if (prevState.index === numbersPokemon.length - 1) {
        return { index: 0 };
      }
      return { index: prevState.index + 1 };
    });
  };

  handleFilter = ({ target }) => {
    const { pokemons } = this.props;
    const filteredPokemons = pokemons.filter(
      (pokemon) => pokemon.type === target.innerHTML
    );

    if(target.innerHTML === "All"){
      return this.setState({
        numbersPokemon: data
      })
    }
    return this.setState({ numbersPokemon: filteredPokemons, index: 0 });
  };

  render() {
    const { index, numbersPokemon } = this.state;
    const { pokemons } = this.props;
    const typeFilter = pokemons.reduce((acc, pokemon) => {
      return acc.includes(pokemon.type) ? acc : [...acc, pokemon.type];
    }, []);
    //referência: https://igluonline.com/como-remover-elementos-duplicados-de-uma-array-no-javascript-es6/

    return (
      <section>
        <div className="pokedex">
          <Pokemon pokemon={numbersPokemon[index]} />
        </div>
        <div className="buttons">
          <button onClick={this.handleFilter}>All</button>
          {typeFilter.map((type, index) => (
            <button key={index} onClick={this.handleFilter}>
              {type}
            </button>
          ))}
        </div>
        <div>
          <button onClick={this.nextPokemon} disabled={numbersPokemon.length === 1} >Próximo Pokémon</button>
        </div>
      </section>
    );
  }
}

export default Pokedex;
