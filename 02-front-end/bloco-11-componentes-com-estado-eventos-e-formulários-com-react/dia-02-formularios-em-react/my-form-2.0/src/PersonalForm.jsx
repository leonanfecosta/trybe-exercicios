import React from 'react';
import Estados from './states';

class PersonalForm extends React.Component {
  render() {
    const {
      handleChange,
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      addressType,
      onBlurHandler,
    } = this.props;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>

        <div className='form-group'>
          Nome:
          <input
            type='text'
            name='name'
            maxLength='40'
            required
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          Email:
          <input
            type='email'
            name='email'
            maxLength='50'
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          CPF:
          <input
            type='text'
            name='cpf'
            maxLength='11'
            required
            value={cpf}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          Endereço:
          <input
            type='text'
            name='address'
            maxLength='200'
            required
            value={address}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          Cidade:
          <input
            type='text'
            name='city'
            maxLength='28'
            required
            value={city}
            onChange={handleChange}
            onBlur={onBlurHandler}
          />
        </div>

        <div className='form-group'>
          Estado:
          <select
            name='countryState'
            defaultValue=''
            required
            value={countryState}
            onChange={handleChange}
          >
            <option value=''>Selecione um estado</option>
            {Estados.map((state, key) => (
              <option key={key} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='house'>
            <input
              type='radio'
              name='addressType'
              id='house'
              required
              value='Casa'
              checked={addressType === 'Casa'}
              onChange={handleChange}
            />
            Casa
          </label>
          <label htmlFor='apart'>
            <input
              type='radio'
              name='addressType'
              id='apart'
              required
              value='Apartamento'
              checked={addressType === 'Apartamento'}
              onChange={handleChange}
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
