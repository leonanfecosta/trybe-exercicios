import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardTitle,
      cardType,
      cardAbility,
      cardPower,
      cardToughness,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="">
        <input
          name="cardTitle"
          type="text"
          placeholder="Title"
          data-testid="title-input"
          value={ cardTitle }
          onChange={ onInputChange }
        />

        <input
          type="text"
          placeholder="Type"
          name="cardType"
          data-testid="type-input"
          value={ cardType }
          onChange={ onInputChange }
        />

        <input
          type="textarea"
          name="cardAbility"
          placeholder="Ability"
          data-testid="ability-input"
          value={ cardAbility }
          onChange={ onInputChange }
        />

        <input
          type="number"
          placeholder="power"
          name="cardPower"
          data-testid="power-input"
          value={ cardPower }
          onChange={ onInputChange }
        />

        <input
          type="number"
          placeholder="toughness"
          name="cardToughness"
          data-testid="toughness-input"
          value={ cardToughness }
          onChange={ onInputChange }
        />

        <input
          type="text"
          placeholder="Image"
          name="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          name="cardRare"
          id="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="comum">Comum</option>
          <option value="incomum">Incomum</option>
          <option value="raro">Raro</option>
        </select>

        <input
          type="button"
          name="save"
          value="Salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  cardAbility: PropTypes.string.isRequired,
  cardPower: PropTypes.string.isRequired,
  cardToughness: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
