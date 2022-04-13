import React from 'react';

class FormDataDisplay extends React.Component {
  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      addressType,
      resume,
      role,
      roleDescription,
    } = this.props;

    return (
      <section>
        <h2>Dados Enviados</h2>
        <h3>Pessoal</h3>
        <div>Nome: {name} </div>
        <div>Email: {email} </div>
        <div>CPF: {cpf} </div>
        <div>Endereço: {address} </div>
        <div>Cidade: {city} </div>
        <div>Estado: {countryState} </div>
        <div>Address Tipo de residência: {addressType} </div>
        <h3>Profissional</h3>
        <div>Resumo do Currículo: {resume} </div>
        <div>Função: {role} </div>
        <div>Descrição da Função: {roleDescription} </div>
      </section>
    );
  }
}

export default FormDataDisplay;
