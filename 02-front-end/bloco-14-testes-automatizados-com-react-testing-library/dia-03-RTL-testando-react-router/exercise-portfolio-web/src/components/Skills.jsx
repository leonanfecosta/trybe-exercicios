import React from 'react';

import './Skills.css';

const basic = 'Básico';
const intermediate = 'Intermediário';
const advanced = 'Avançado';

class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        <h3>Habilidade 1</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>Habilidade 2</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Habilidade 3</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step ">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Habilidade 4</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>Habilidade 5</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>
      </section>
    );
  }
}

export default Skills;
