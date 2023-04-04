import React from "react";

const Hero = ({ name }) => {
    if(name === "bad"){
        throw new Error('Not a human hero');
    }
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Hero;
