import { useState } from "react";

const ErrorExample = () => {
  const [number, setNumber] = useState(1);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button className="btn" onClick={handleClick}>
        +1
      </button>
    </div>
  );
};

export default ErrorExample;
