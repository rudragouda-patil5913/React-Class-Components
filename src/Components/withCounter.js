import React from "react";

// const UpdatedComponent = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     constructor() {
//       super();

//       this.state = {
//         count: 0,
//       };
//     }
//     increment = () => {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//       }));
//     };
//     render() {
//       return (
//         <OriginalComponent
//           increment={this.increment}
//           count={this.state.count}
//         />
//       );
//     }
//   }
//   return NewComponent;
// };

// export default UpdatedComponent;
const withCounter = (WrappedComponent,increment) => {
  class WithCounter extends React.Component {
    constructor() {
      super()

      this.state = {
        count: 0,
      };
    }
    increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + increment,
      }));
    };
    render() {
      return (
        <WrappedComponent
          increment={this.increment}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;