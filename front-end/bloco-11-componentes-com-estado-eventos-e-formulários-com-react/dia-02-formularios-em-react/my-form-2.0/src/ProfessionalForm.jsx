import React from 'react';

class ProfessionalForm extends React.Component {
  render() {
    const { handleChange, resume, role, roleDescription, onMouse ,onMouseEnter } = this.props;
    return (

      <fieldset>
        <legend>Dados profissionais</legend>
        <div className='form-group'>
          Resumo do Currículo:
          <textarea
            name='resume'
            maxLength='1000'
            required
            value={resume}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='form-group'>
          Cargo:
          <textarea
            name='role'
            maxLength='40'
            required
            value={role}
            onMouseEnter={onMouse === 0 ? onMouseEnter : null}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='form-group'>
          Descrição do Cargo:
          <textarea
            name='roleDescription'
            maxLength='500'
            required
            value={roleDescription}
            onChange={handleChange}
          ></textarea>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
