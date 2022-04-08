import React from 'react';
import PropTypes from 'prop-types';


class Text extends React.Component {
  render() {
    const { handleChange, nameValue, emailValue, ageValue } = this.props;

    return (
      <>
        <label>
          Nome: 
          <input
            type='text'
            name='nome'
            placeholder='Nome'
            value={nameValue}
            onChange={handleChange}
          />
          {!nameValue ? 'Digite seu nome!' : null}
        </label>

        <label>
          Email: 
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={emailValue}
            onChange={handleChange}
          />
          {!emailValue ? 'Digite seu email!' : null}
        </label>

        <label>
          Idade: 
          <input
            type='number'
            name='idade'
            placeholder='Idade'
            onChange={handleChange}
            value={ageValue}
          />
          {!ageValue ? 'Digite sua idade!' : null}
        </label>
      </>
    );
  }
}

Text.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
}

export default Text;
