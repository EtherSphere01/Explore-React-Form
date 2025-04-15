import { useState } from "react";

const userInputField = (defaultValue) => {
  const [field, setField] = useState(defaultValue);

  const handleChange = (e) => {
    setField(e.target.value);
  };
  return [field, handleChange];
};

export default userInputField;
