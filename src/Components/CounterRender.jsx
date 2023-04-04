import React, { Component } from 'react';

class CounterRender extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        {/* {this.props.render(true)} */}
        {/* {this.props.render(true)} */}
        {this.props.render(this.state.count,this.increment)}
      </div>
    );
  }
}

export default CounterRender;