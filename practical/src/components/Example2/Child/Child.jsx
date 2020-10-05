import React, { Component } from "react";

class Child extends Component {
  state = {
    bananas: 0
  };

  componentDidMount() {
    this.setState({ bananas: this.props.count })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({ bananas: this.props.count })
    }
  }

  render() {
    return (
      <div>
        Ilość banaów: {this.state.bananas}
      </div>
    );
  }
}

export default Child;
