import React from "react";

class PokemonDetail extends React.Component {
  render() {
    const {
      pokemons,
      favorites,
      onChangeFavorite,
      match: {
        params: { id },
      },
    } = this.props;
    // console.log(favorites);

    const findPokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    // console.log(findPokemon);

    const { name, type, averageWeight, image, summary, foundAt } = findPokemon;

    const isFavorite = favorites.some((fav) => fav.id === findPokemon.id);
    // console.log(isFavorite);

    return (
      <section>
        <section className="pokemon">
          <div>
            <h1>Pokemon Details</h1>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight:
              {` ${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
          { isFavorite && <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="star" width='30px' /> }
        </section>
        <p>Summary: {summary}</p>
        <section>
          Maps:
          {foundAt.map((location) => {
            return (
              <section key={location.location}>
                <p>{location.location}</p>
                <img src={location.map} alt={location.location} />
              </section>
            );
          })}
        </section>

        <section>
          Pokemon Favoritado?
          <input type="checkbox" id="favorite" checked={isFavorite} onChange={() => onChangeFavorite(findPokemon, isFavorite)} />
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
