import React from "react";
import { Link } from "react-router-dom";
import "./pokemon.css";

class Pokemon extends React.Component {
  render() {
    const {isFavorite, pokemon} = this.props;
    const { name, type, averageWeight, image, id } = pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            {` ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>

          <Link to={`/pokemons/${id}`}>More details</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
        { isFavorite && <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="star" width='30px' /> }
      </div>
    );
  }
}

export default Pokemon;
