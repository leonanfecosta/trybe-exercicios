import React, { Component } from 'react';
import './Form.css';
import EstadoFavorito from './EstadoFavorito';
import Text from './Text';

class Form extends Component {
  constructor() {
    super();

    // this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    // this.hadleNameChange = this.hadleNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleIdadeChange = this.handleIdadeChange.bind(this);
    // this.handleSelectChange = this.handleSelectChange.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      palavraChaveFavorita: 'react',
      vaiComparecer: false,
      formularioComErros: true,
    };
  }

  handleError = () => {
    const {
      email,
      estadoFavorito,
      nome,
      vaiComparecer,
      idade,
      palavraChaveFavorita,
    } = this.state;

    const errorCases = [
      !nome.length,
      !email.match(/^\S+@\S+$/i),
      !estadoFavorito.length,
      !vaiComparecer,
      !idade.length,
      !palavraChaveFavorita.length,
    ];

    const formulárioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formulárioPreenchido,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleError();
      }
    );
  };

  /*    handleTextAreaChange(event) {
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
 */
  // handleCheckboxChange({target}) {
  //   const {name, checked} = target;
  //   this.setState({
  //     [name]: checked,
  //   });
  // }

  render() {
    const {
      nome,
      email,
      estadoFavorito,
      idade,
      palavraChaveFavorita,
      vaiComparecer,
      formularioComErros,
    } = this.state;
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className='form'>
          <EstadoFavorito
            handleChange={this.handleChange}
            value={estadoFavorito}
          />

          <Text
            handleChange={this.handleChange}
            nameValue={nome}
            emailValue={email}
            ageValue={idade}
          />

          <select
            value={palavraChaveFavorita}
            onChange={this.handleChange}
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

          <fieldset>
            <legend>Vai Comparecer?</legend>
            <input
              type='checkbox'
              name='vaiComparecer'
              onChange={this.handleChange}
              value={vaiComparecer}
            />
          </fieldset>
          <input type='file' />
        </form>

        {formularioComErros ? (
          <h1>Preencha todos os campos corretamente!</h1>
        ) : (
          <h1>Formulário preenchido com sucesso!</h1>
        )}
      </div>
    );
  }
}

export default Form;
