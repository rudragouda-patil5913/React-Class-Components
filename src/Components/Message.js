import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: " hey welcome to my page",
      count: 0,
    };
  }

  changeMessage() {
    this.setState ({
      message: "Thanks for subscribing",
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message} {this.state.count}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
