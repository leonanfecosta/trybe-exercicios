import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

class App extends React.Component {
  renderHeader() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre Mim</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/contact" component={ Contact } />
        <Route>
          <section>
            <h1>Página não encontrada</h1>
          </section>
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <div className="App">
        { this.renderHeader() }
        { this.renderRoutes() }
      </div>
    );
  }
}

export default App;
