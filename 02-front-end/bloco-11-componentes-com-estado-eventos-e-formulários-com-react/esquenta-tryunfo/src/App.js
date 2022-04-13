import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardTitle: '',
      cardType: '',
      cardAbility: '',
      cardPower: '0',
      cardToughness: '0',
      cardImage: '',
      cardRare: 'normal',
      cards: [],
    };
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validadeInputs = (state) => {
    const {
      cardTitle,
      cardType,
      cardAbility,
      cardPower,
      cardToughness,
      cardImage,
      cardRare,
    } = state;

    const MAX_ATTR = 10;

    if (
      [cardTitle, cardType, cardAbility, cardPower, cardToughness, cardImage, cardRare]
        .some((item) => item.length === 0)) {
      return true;
    }

    if (
      [cardPower, cardToughness]
        .some((item) => item > MAX_ATTR || item < 0)) {
      return true;
    }

    return false;
  }

  clearForm = (prevState) => ({
    ...prevState,
    cardTitle: '',
    cardType: '',
    cardAbility: '',
    cardPower: '0',
    cardToughness: '0',
    cardImage: '',
    cardRare: 'normal',
  })

  saveNewCard = (prevState) => {
    const { cards, ...newCard } = prevState;
    // console.log(prevState);
    // console.log(cards);
    // console.log(newCard);
    return ({
      ...prevState,
      cards: cards.concat(newCard),
    });
  };

  onSaveButtonClick = () => {
    this.setState(this.saveNewCard, () => this.setState(this.clearForm));
  }

  render() {
    const {
      cardTitle,
      cardType,
      cardAbility,
      cardPower,
      cardToughness,
      cardImage,
      cardRare,
      cards,
    } = this.state;

    return (
      <div>
        <h1>Magic the Gathering</h1>
        <section>
          <Form
            cardTitle={ cardTitle }
            cardType={ cardType }
            cardAbility={ cardAbility }
            cardPower={ cardPower }
            cardToughness={ cardToughness }
            cardImage={ cardImage }
            cardRare={ cardRare }
            isSaveButtonDisabled={ this.validadeInputs(this.state) }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardTitle={ cardTitle }
            cardType={ cardType }
            cardAbility={ cardAbility }
            cardPower={ cardPower }
            cardToughness={ cardToughness }
            cardImage={ cardImage }
            cardRare={ cardRare }
          />
        </section>

        <section>
          <h3>Todas as Cartas</h3>

          { cards.map((card, index) => (
            <Card
              key={ index }
              cardTitle={ card.cardTitle }
              cardType={ card.cardType }
              cardAbility={ card.cardAbility }
              cardPower={ card.cardPower }
              cardToughness={ card.cardToughness }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
