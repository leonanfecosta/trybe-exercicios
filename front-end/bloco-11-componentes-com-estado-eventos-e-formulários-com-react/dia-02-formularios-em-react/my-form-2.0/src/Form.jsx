import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
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
      resume,
      role,
      roleDescription,
      onBlurHandler,
      sendForm,
      resetForm,
      onMouseEnter,
      onMouse,
    } = this.props;

    return (
      <form>
        <PersonalForm
          handleChange={handleChange}
          onBlurHandler={onBlurHandler}
          name={name}
          email={email}
          cpf={cpf}
          address={address}
          city={city}
          countryState={countryState}
          addressType={addressType}
        />
        <ProfessionalForm
          handleChange={handleChange}
          resume={resume}
          role={role}
          roleDescription={roleDescription}
          onMouse={onMouse}
          onMouseEnter={onMouseEnter}
        />

        <input type='button' value='Enviar' onClick={sendForm} />
        <input type='button' value='Limpar' onClick={resetForm} />
      </form>
    );
  }
}
export default Form;
