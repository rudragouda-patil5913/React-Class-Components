import React from 'react';
import Person from './Person';

const PersonList = () => {
    const persons = [
      {
        id: 1,
        name: "amar",
        age: 23,
      },
      {
        id: 3,
        name: "akbar",
        age: 33,
      },

      {
        id: 2,
        name: "antony",
        age: 13,
      },
    ];
    const data = persons.map((person)=>{
        return <Person {...person} />
    })
  return (
    <div>{data}</div>
  )
}

export default PersonList;