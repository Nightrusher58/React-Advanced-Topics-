import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [display, setdisplay] = useState("Gimme 5");

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setTimeout(() => {
          setdisplay(response);
          setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2>{display}</h2>
      </div>
    );
  } else {
  }
  const { login, bio, blog } = display;
  return (
    <div>
      <h2>{login} </h2>
      <h3>{bio}</h3>
      <h4>{blog}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
