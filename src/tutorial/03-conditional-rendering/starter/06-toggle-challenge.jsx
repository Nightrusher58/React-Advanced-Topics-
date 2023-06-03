import { useState } from "react";

const ToggleChallenge = () => {
  const [isTrue, setTrue] = useState(false);

  const handleClick = () => {
    setTrue(!isTrue);
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        toggle
      </button>
      {isTrue ? <SomeComponent /> : null}
    </div>
  );
};

const SomeComponent = () => {
  return (
    <div>
      <h1>SomeText</h1>
    </div>
  );
};

export default ToggleChallenge;
