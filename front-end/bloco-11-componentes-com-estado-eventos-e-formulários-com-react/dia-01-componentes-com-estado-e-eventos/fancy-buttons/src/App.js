import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne() {
    this.setState((estadoAnterior, _props) => ({
      btn1: estadoAnterior.btn1 + 1,
    }));
    // console.log('This do Botão 1', this);
  }

  handleClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      btn2: estadoAnterior.btn2 + 1,
    }));
    // console.log('This do Botão 2', this);
  }

  handleClickThree() {
    this.setState((estadoAnterior, _props) => ({
      btn3: estadoAnterior.btn3 + 1,
    }));
    // console.log('This do Botão 3', this);
  }

  switchColorButton(number) {
    return number % 2 === 0  ? 'green' : 'white';
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClickOne}
          style={{ backgroundColor: this.switchColorButton(this.state.btn1) }}
        >
          Botão 1 | {this.state.btn1}
        </button>
        <button
          onClick={this.handleClickTwo}
          style={{ backgroundColor: this.switchColorButton(this.state.btn2) }}
        >
          Botão 2 | {this.state.btn2}
        </button>
        <button
          onClick={this.handleClickThree}
          style={{ backgroundColor: this.switchColorButton(this.state.btn3) }}
        >
          Botão 3 | {this.state.btn3}
        </button>
      </div>
    );
  }
}

export default App;
