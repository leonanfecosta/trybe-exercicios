import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import History from "./pages/History";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [],
    };
  }

  handleHistory = (history) => {
    this.setState((prevState) => {
      return {
        history: [...prevState.history, history],
      };
    });
  };

  render() {
    return (
      <section className="App">
        <h1>Search App</h1>
        <Nav />

        <Switch>
          <Route
            path="/search/:searchTerm"
            render={(props) => <Search {...props} />}
          />
          <Route exact path="/history" render={() => <History {...this.state} />} />

          <Route
            exact
            path="/"
            render={() => <Home onClick={this.handleHistory} />}
          />
        </Switch>
      </section>
    );
  }
}

export default App;
