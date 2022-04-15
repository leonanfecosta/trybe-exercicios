import React from "react";

class PokemonDetail extends React.Component {
  render() {
    const {
      pokemons,
      match: {
        params: { id },
      },
    } = this.props;

    const findPokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    // console.log(findPokemon);

    const { name, type, averageWeight, image, summary, foundAt } = findPokemon;

    return (
      <section>
        <h1>Pokemon Details</h1>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight:
          {` ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <p>Summary: {summary}</p>
        <img src={image} alt={`${name} sprite`} />
        <section>
          Maps:
          {
            foundAt.map((location) => {
              return (
              <section key={location.location}>
                <p>{location.location}</p>
                <img src={location.map} alt={location.location} />
              </section>
              )
            })
          }
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
