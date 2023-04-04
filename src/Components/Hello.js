import React from "react";

const Hello = () => {
  // With JSX
  //   return (
  //     <div id="hello" className:'dummy' >
  //       <h1>Hello 123 mike testing </h1>
  //     </div>
  //   );

  // Without JSX
  return React.createElement(
    "div",
    {id:'hello', className: 'dummy'},
    React.createElement("h1", null, "Hello brother's")
  );
};

export default Hello;
