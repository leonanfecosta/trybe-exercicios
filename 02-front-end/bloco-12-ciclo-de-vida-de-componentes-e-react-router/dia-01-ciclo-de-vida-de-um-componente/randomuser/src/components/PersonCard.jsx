import React, { Component } from 'react';

class PersonCard extends Component {
  render () {
    const { person: {name, email, age, picture} } = this.props;
    return (
      <div className="person-card">
        <p>{ name }</p>
        <p>{ email }</p>
        <p>{ age }</p>
        <img src={ picture } alt={ name }/>
      </div>
    );
  }
}

export default PersonCard;