import React from "react";
import carsContext from "./carsContext";

class carsContextProvider extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  render() {
    const { children } = this.props;
    const INITIAL_STATE = {
      ...this.state,
      moveCar: this.moveCar,
    };
    
    return (
      <carsContext.Provider value={INITIAL_STATE}>
        {children}
      </carsContext.Provider>
    );
  }
};

export default carsContextProvider;
