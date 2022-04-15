import React from "react";
import Pokemon from "./Pokemon";

class FavoritesPokemons extends React.Component {
  render() {
    const { favorites } = this.props;
    return (
      <>
        <h1>Favorites Pokemons</h1>
        {favorites.length === 0 ? <h3>Nenhum pokemon encontrado 😭</h3>  :
          <section>
            {favorites.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} isFavorite />
            ))}
          </section>
        }
      </>
    );
  }
}

export default FavoritesPokemons;
