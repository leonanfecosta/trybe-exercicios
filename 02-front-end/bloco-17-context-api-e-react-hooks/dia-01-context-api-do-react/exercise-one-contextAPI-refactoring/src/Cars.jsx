// src/Cars.jsx
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import carsContext from './context/carsContext';

function Cars() {
  return (
    <carsContext.Consumer>
      {({ cars: {red: redCar, blue:blueCar, yellow: yellowCar }, moveCar }) => (
        <div>
          <div>
            <img
              className={redCar ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button onClick={() => moveCar('red', !redCar)} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={blueCar ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button onClick={() => moveCar('blue', !blueCar)} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={yellowCar ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button onClick={() => moveCar('yellow', !yellowCar)} type="button">
              Move
            </button>
          </div>
        </div>
      )}
    </carsContext.Consumer>
  );
}


export default Cars;
