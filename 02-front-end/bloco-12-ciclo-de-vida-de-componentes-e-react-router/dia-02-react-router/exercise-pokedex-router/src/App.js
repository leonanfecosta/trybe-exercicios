import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import PokemonsDetails from "./PokemonsDetails";
import About from "./About";
import NotFound from "./NotFound";
import FavoritesPokemons from "./FavoritesPokemons";

const LOCAL_STORAGE_KEY = "favorites";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonsList: pokemons,
      pokemonsFavorite: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
    };
  }

  handleChangeFavorite = (pokemon, isFavorited) => {
    // console.log(pokemonId, isFavorited);
    if (!isFavorited) {
      this.setState((prevState) => {
        const newFavorites = [...prevState.pokemonsFavorite, pokemon];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFavorites));
        return {
          pokemonsFavorite: newFavorites,
        };
      });
    } else {
      this.setState((prevState) => {
        const newFavorites = prevState.pokemonsFavorite.filter(
          (pokesFav) => pokesFav.id !== pokemon.id
        );
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFavorites));
        return {
          pokemonsFavorite: newFavorites,
        };
      });
    }
  };

  render() {
    const { pokemonsList, pokemonsFavorite } = this.state;

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <Switch>
          <Route
            path="/pokemons/:id"
            render={(props) => (
              <PokemonsDetails
                {...props}
                pokemons={pokemonsList}
                favorites={pokemonsFavorite}
                onChangeFavorite={this.handleChangeFavorite}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route
            path="/favorites"
            render={(props) => (
              <FavoritesPokemons favorites={pokemonsFavorite} {...props} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <Pokedex pokemons={pokemonsList} favorites={pokemonsFavorite} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
