import { useState, useEffect } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const test = () => {
    console.log("Hello There its test");
  };

  test();

  useEffect(() => {
    console.log("Hey its useEffect, and i will only console log once");
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
