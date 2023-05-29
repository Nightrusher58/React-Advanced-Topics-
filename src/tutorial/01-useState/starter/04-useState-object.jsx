import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: "28",
    hobby: "Video Games",
  });
  const handleClick = () => {
    setPerson((prevState) => {
      return { ...prevState, name: "Jackie" };
    });
  };
  const { name, age, hobby } = person;
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
