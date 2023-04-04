import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} {props.surname}{" "}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Greet;
