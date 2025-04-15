import React from "react";
import userInputField from "../../../hooks/useINputFiels";

const HookForm = () => {
  const [name, nameOnChange] = userInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} onChange={nameOnChange} type="text" />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
