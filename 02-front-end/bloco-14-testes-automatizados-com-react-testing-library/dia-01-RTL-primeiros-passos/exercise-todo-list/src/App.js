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

  selectTodo = (todoIndex) => {
    this.setState({ selectedTodo: todoIndex });
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removerTodo(todoIndex) {
    this.setState((prevState) => ({
      listTodo: prevState.listTodo.filter((_item, index) => index !== todoIndex),
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
              <button type="button" onClick={ () => this.selectTodo(index) }>
                Selecionar
              </button>
              <button
                type="button"
                disabled={ !(selectedTodo !== null && selectedTodo === index) }
                onClick={ () => this.removerTodo(index) }
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
