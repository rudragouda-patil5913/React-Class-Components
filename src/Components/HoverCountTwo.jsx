import { Component } from "react";

class HoverCountTwo extends Component {
 
  render() {
    const { count,increment } = this.props;
    return <h2 onMouseOver={increment}>Hovered {count} times</h2>;
  }
}

export default HoverCountTwo;
