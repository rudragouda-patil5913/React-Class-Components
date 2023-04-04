import React, { PureComponent } from "react";

class PurComponent extends PureComponent {
  render() {
    console.log("Pure Component")
    return (
      <div>
        <h1>PureComponent {this.props.name}</h1>
      </div>
    );
  }
}

export default PurComponent;
