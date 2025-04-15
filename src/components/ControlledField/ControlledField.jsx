import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br></br>
        <input type="submit" value="Submit" name="submit" />
      </form>
      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
