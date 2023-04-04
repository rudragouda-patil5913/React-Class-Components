import React from "react";

const List = () => {
  const names =["amar", "akbar", "Antony"]
  const namesList = names.map((name) => {
    return <h1>{name}</h1>;
  });
  return (
      <div>{namesList}
      {/* {names.map((name) => { 
        return <h1>{name}</h1>;
      })} */}
    </div>
  );
};

export default List;
