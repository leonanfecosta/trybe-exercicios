import './App.css';
import React from 'react';
import Form from './Form';
import FormDataDisplay from './FormDataDisplay';

const initalState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  onMouse: 0,
  submitBtn: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = initalState;
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAdress(value);

    this.updateState(name, value);
  };

  updateState = (name, value) => {
    this.setState({ [name]: value });
  };

  validateAdress = (address) =>
    address
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\\-]+/g, '');

  onBlurHandler = (event) => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  };

  sendForm = () => {
    this.setState({ submitBtn: true });
  };

  resetForm = () => {
    this.setState(initalState);
  };

  onMouseEnter = () => {
    this.setState({ onMouse: 1 });
    return alert('Preencha com cuidado essa informação.');
  };

  render() {
    const {
      address,
      addressType,
      city,
      countryState,
      cpf,
      email,
      name,
      resume,
      role,
      roleDescription,
      submitBtn,
      onMouse,
    } = this.state;
    return (
      <main>
        <Form
          handleChange={this.handleChange}
          onBlurHandler={this.onBlurHandler}
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          onMouseEnter={this.onMouseEnter}
          address={address}
          addressType={addressType}
          city={city}
          countryState={countryState}
          cpf={cpf}
          email={email}
          name={name}
          resume={resume}
          role={role}
          roleDescription={roleDescription}
          onMouse={onMouse}
        />
        {submitBtn && (
          <FormDataDisplay
            handleChange={this.handleChange}
            onBlurHandler={this.onBlurHandler}
            address={address}
            addressType={addressType}
            city={city}
            countryState={countryState}
            cpf={cpf}
            email={email}
            name={name}
            resume={resume}
            role={role}
            roleDescription={roleDescription}
          />
        )}
      </main>
    );
  }
}

export default App;
