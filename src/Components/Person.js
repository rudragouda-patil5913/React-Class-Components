import React from "react";

const Person = (props) => {
  // console.log(props);
  const { name, id, age } = props;
  // console.log(name)
  return (
    <div>
      <h1>
        I'm {name}. My id is {id} and age is {age}
      </h1>
    </div>
  );
};

export default Person;
