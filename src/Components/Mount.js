import React, { Component } from "react";
import ChildMount from "./ChildMount";

class Mount extends Component {
  constructor() {
    super();
    this.state = {
      name: "rudra",
    };
    console.log("1.Constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2.getDerivedStateFromProps called");
  }
  componentDidMount() {
    console.log("4.Component Parent Mount");
  }
  shouldComponentUpdate() {
    console.log(" Parent Mount Should component update");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log(" Parent Mount getSanpShotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log(" Parent Mount component did update");
  }
  componentWillUnmount() {
    console.log("Parent Component unmount");
  }

  changeUpdate = () => {
    this.setState({
      name: "patil",
    });
  };
  render() {
    console.log("3.render called");
    return (
      <div>
        Life Cycle Methods
        <ChildMount />
        <button onClick={this.changeUpdate}>Change</button>
      </div>
    );
  }
}

export default Mount;
