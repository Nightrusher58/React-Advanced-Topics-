import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [display, setDisplay] = useState(data);
  const [name, setName] = useState("");
  const [id, setId] = useState(5);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setId((prevId) => {
      return prevId + 1;
    });

    setDisplay((prevState) => {
      const newState = [...prevState, { id: id, name: name }];
      return newState;
    });

    setName("");
  };

  const handleDelete = (id) => {
    const setNewFolks = display.filter((person) => {
      return person.id !== id;
    });
    setDisplay(setNewFolks);
  };
  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block" onClick={handleClick}>
          submit
        </button>
      </form>
      <div>
        {display.map((person) => {
          const { name, id } = person;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <button
                type="button"
                className="btn"
                onClick={() => handleDelete(id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
