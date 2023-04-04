import React from "react";


const FunctionClick = () => {
    function handleChange(){
        
        console.log("button Clicked " );
    }
  return (
    <div>
      <button onClick={handleChange} >Click</button>
    </div>
  );
};

export default FunctionClick;
