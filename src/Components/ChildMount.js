import React, { Component } from "react";

class ChildMount extends Component {
  constructor() {
    super();
    this.state = {
      username: "rudra",
    };
    console.log("1.Constructor children called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2.getDerivedStateFromProps children called");
    return null; 
  }
  componentDidMount() {
    console.log("4.Component children ChildMount");
  }
  shouldComponentUpdate(){
    console.log("Should component update");
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log("getSanpShotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log("Child Component unmount")
  }
  render() {
    console.log("3.render children called");
    return <div>Child Component</div>;
  }
}

export default ChildMount;
