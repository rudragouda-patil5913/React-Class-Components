import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
  }
  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <div>
    //       <h1>Welcome Hero</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Welcome guest</h1>
    //     </div>
    //   );
    // }

    //Element Variable Method
    // let message
    // if(this.state.isLoading){
    //     message = <div>Welcome Hero</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return(
    //     <div>{message}</div>
    // )

    //Conditional Opertaor
    // return this.state.isLoading ? (
    //     <div>Welcome hero</div>
    //    ): (<div>Welcome Guest</div>)

    //Short-circuit
    return this.state.isLoading && <div>Hello Hero</div>;
  }
}

export default ConditionalRendering;
