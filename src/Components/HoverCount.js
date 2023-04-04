import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCount extends Component {
  render() {
    const {count, increment} = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}>Mouse hover {count}</h1>
      </div>
    );
  }
}

export default withCounter(HoverCount,5);
