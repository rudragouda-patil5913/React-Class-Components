import React, { Component } from "react";
// import RegComponent from "./RegComponent";
import PureComponent from "./PureComponent";
// import MemoComponent from "./MemoComponent";
class PureParentComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "rudra",
    };
  }

  componentWillMount(){
    setTimeout(()=>{
        this.setState({
            name:"rudra"
        })
    }, 2000)

  }
  render() {
    console.log("*************Parent Component**********");
    return (
      <div>
        {/* <RegComponent name={this.state.name} /> */}
        <PureComponent name={this.state.name} />
        {/* <MemoComponent name={this.state.name}/> */}
      </div>
    );
  }
}

export default PureParentComponents;
