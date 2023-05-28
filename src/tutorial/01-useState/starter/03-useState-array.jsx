import { data } from "../../../data";
import React from "react";
import { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleSingleDelete = (id) => {
    let newPeopleArray = people.filter((person) => person.id !== id);
    setPeople(newPeopleArray);
  };

  const handleClearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button
              onClick={() => handleSingleDelete(id)}
              type="button"
              className="btn"
            >
              Delete
            </button>
          </div>
        );
      })}
      <div>
        <button onClick={handleClearAllItems} type="button" className="btn">
          Clear all Items
        </button>
      </div>
    </div>
  );
};

export default UseStateArray;
