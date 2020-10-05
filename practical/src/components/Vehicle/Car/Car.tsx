import React, { Component } from "react";

interface Props {
  onVehicleSpeedChange: (speed: number) => void;
}

interface State {
  speed: number
}

class Car extends Component<Props, State> {
  state = {
    speed: 100
  };

  setVehicleSpeed() {
    this.props.onVehicleSpeedChange(this.state.speed)
  }

  render() {
    return (
      <div>
        <h2>Prędkość samochodu: {this.state.speed}</h2>
        <button onClick={this.setVehicleSpeed.bind(this)}>
          Wyrównaj prędkość
        </button>
      </div>
    );
  }
}

export default Car;
