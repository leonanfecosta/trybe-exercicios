import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardTitle,
      cardType,
      cardAbility,
      cardPower,
      cardToughness,
      cardImage,
      cardRare,
    } = this.props;

    return (
      <section>
        <p data-testid="title-card">{`Name: ${cardTitle}`}</p>
        <img src={ cardImage } alt={ cardTitle } data-testid="image-card" />
        <p data-testid="type-card">
          {`Type: ${cardType}`}
        </p>
        <p data-testid="ability-card">{`Ability: ${cardAbility}`}</p>
        <p data-testid="power-card">{`Power: ${cardPower}`}</p>
        <p data-testid="toughness-card">{`Toughness: ${cardToughness}`}</p>
        <p data-testid="rare-card">{`Rarity: ${cardRare}`}</p>
      </section>
    );
  }
}

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  cardAbility: PropTypes.string.isRequired,
  cardPower: PropTypes.string.isRequired,
  cardToughness: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
};

export default Card;
