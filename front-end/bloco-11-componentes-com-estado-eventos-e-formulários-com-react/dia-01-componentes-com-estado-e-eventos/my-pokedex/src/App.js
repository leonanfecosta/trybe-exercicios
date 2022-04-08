import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <section className='App'>
      <h1 className='AppTitle'>Pokedex</h1>
      <div>
        <Pokedex pokemons={pokemons} />
      </div>
    </section>
  );
}

export default App;
