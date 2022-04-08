import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: {name, type, averageWeight:{ value, measurementUnit }, image }}= this.props;

    return (
      <section className='pokemon'>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Average weight: ${ value }${ measurementUnit }` }</p>
        </div>
        <img className="img" src={ image.toString() } alt={ `${ name } sprite` } />
      </section>
    );
  }
}

export default Pokemon