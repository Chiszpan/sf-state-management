import React, { Component } from "react";
import Car from "./Car/Car";

interface Props {
  speed: number
}

interface State {
  speed: number
}

class Vehicle extends Component<Props, State> {
  state = {
    speed: 10
  };

  componentDidMount() {
    const { speed } = this.props;

    this.setState({
      speed: this.state.speed + speed
    });
  }

  componentDidUpdate(prevProps: any) {
    const { speed } = this.props;

    if (prevProps.speed !== speed) {
      this.setState({
        speed: this.state.speed + speed
      });
    }
  }


  onVehicleSpeedChange(value: number) {
    this.setState({
      speed: value
    }, () => {
      // :)
      console.log(this.state.speed);
    });
  }

  render() {
    return (
      <div>
        <h2>Prędkość pojazdu: {this.state.speed}</h2>
        {<Car onVehicleSpeedChange={this.onVehicleSpeedChange.bind(this)}/>}
      </div>
    );
  }
}

export default Vehicle;
