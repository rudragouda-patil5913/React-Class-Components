import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super()
    this.state = {
      cnt: 0,
      message: "Hello!",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = ()=> {
    this.setState({
      cnt: this.state.cnt + 1,
      message: "Good Bye",
    }, ()=>{console.log(this.state.message)});

  }
  render() {
    return (
      <div>
        <h1>
          {this.state.message} {this.state.cnt}
        </h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button
          onClick={() => {
            this.clickHandler();
          }}>
          Click
        </button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
