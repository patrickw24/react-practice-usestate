import { useState } from "react";

export const GreetingApp = () => {
  const [name, setName] = useState(`Hello Patrick!`);

  const onClickHandler = () => {
    if (name === `Hello Patrick!`) {
      setName(`Goodbye Patrick!`);
    } else if (name === `Goodbye Patrick!`) {
      setName(`Hello Patrick!`);
    }
  };

  return (
    <>
      <div>
        <h1 className="display-4"> Greeting App</h1>
        <p className="fs-5"> {name}</p>
        <button className="btn btn-success" onClick={onClickHandler}>Click Here </button>
      </div>
    </>
  );
};
