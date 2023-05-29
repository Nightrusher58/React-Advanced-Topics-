import { useState } from "react";
let persons = [
  { name: "John", age: "28", hobby: "Video Games" },
  {
    name: "Jack",
    age: "25",
    hobby: "Programming",
  },
];

const UseStateObject = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState("28");
  const [hobby, setHobby] = useState("Video Games");

  const handleClick = () => {
    setName("Jack");
    setAge("25");
    setHobby("Programming");
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{hobby}</h4>
      <button type="button" onClick={handleClick} className="btn">
        Display other person
      </button>
    </div>
  );
};

export default UseStateObject;
