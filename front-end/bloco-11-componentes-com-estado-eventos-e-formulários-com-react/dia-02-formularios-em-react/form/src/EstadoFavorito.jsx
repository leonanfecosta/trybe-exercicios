import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EstadoFavorito extends Component {
  render() {
    const { handleChange, value } = this.props;

    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea name='estadoFavorito' value={value} onChange={handleChange} />
        {value.length > 20 ? 'Não é permitido mais de 20 caracteres!' : null}
      </label>
    );
  }
}

EstadoFavorito.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default EstadoFavorito;
