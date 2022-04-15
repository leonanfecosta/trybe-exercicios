import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import PokemonsDetails from "./PokemonsDetails";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route
          path="/pokemons/:id"
          render={(props) => (
            <PokemonsDetails {...props} pokemons={pokemons} />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
