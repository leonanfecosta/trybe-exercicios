import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTodo: null,
    };

    this.addTodo = this.addTodo.bind(this);
  }

  selectTodo = (todo) => {
    this.setState({ selectedTodo: todo });
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removerTodo(todo) {
    this.setState((prevState) => ({
      listTodo: prevState.listTodo.filter((item) => item !== todo),
    }));
  }

  render() {
    const { listTodo, selectedTodo } = this.state;
    return (
      <main className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } />
              <button type="button" onClick={ () => this.selectTodo(todo) }>
                Selecionar
              </button>
              <button
                type="button"
                disabled={ !(selectedTodo && selectedTodo === todo) }
                onClick={ () => this.removerTodo(todo) }
              >
                Remover
              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}
export default App;
