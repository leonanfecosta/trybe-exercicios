import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.hadleNameChange = this.hadleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleIdadeChange = this.handleIdadeChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      palavraChaveFavorita: 'react',
      vaiComparecer: false,
    };
  }

  handleTextAreaChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  hadleNameChange(event) {
    this.setState({
      nome: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleIdadeChange(event) {
    this.setState({
      idade: event.target.value,
    });
  }

  handleSelectChange(event) {
    this.setState({
      palavraChaveFavorita: event.target.value,
    });
  }

  handleCheckboxChange(event) {
    this.setState({
      vaiComparecer: event.target.checked,
    });
  }
  render() {
    const {
      nome,
      email,
      estadoFavorito,
      idade,
      palavraChaveFavorita,
      vaiComparecer,
    } = this.state;
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className='form'>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <textarea
              name='estadoFavorito'
              value={estadoFavorito}
              onChange={this.handleTextAreaChange}
            />
          </label>
          <input
            type='text'
            name='nome'
            placeholder='Nome'
            value={nome}
            onChange={this.hadleNameChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={this.handleEmailChange}
          />
          <input
            type='number'
            name='idade'
            placeholder='Idade'
            onChange={this.handleIdadeChange}
            value={idade}
          />
          <select
            value={palavraChaveFavorita}
            onChange={this.handleSelectChange}
            name='palavraChaveFavorita'
          >
            <option value='react'>React</option>
            <option value='redux'>Redux</option>
            <option value='react-native'>React Native</option>
            <option value='vue'>Vue</option>
            <option value='angular'>Angular</option>
            <option value='svelte'>Svelte</option>
            <option value='ember'>Ember</option>
          </select>
          <input
            type='checkbox'
            name='vaiComparecer'
            onChange={this.handleCheckboxChange}
            value={vaiComparecer}
          />
        </form>
      </div>
    );
  }
}

export default Form;
