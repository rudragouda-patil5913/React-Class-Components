import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("update " + this.state.count);
      }
    );
    console.log(this.state.count);
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h1>
          Counter Increment <span>{this.state.count}</span>
        </h1>
        {/* <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.reset()}>RESET</button>
        <button onClick={() => this.decrement()}>Decrement</button> */}
        <button onClick={() => this.incrementFive()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
