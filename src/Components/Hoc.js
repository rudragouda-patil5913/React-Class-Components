import React, { Component } from "react";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

class Hoc extends Component {
  render() {
    return (
      <div>
        <ClickCount name="rudra"/>
        <HoverCount />
      </div>
    );
  }
}

export default Hoc;
