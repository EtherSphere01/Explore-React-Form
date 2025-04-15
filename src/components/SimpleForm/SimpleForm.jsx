import React from "react";

const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <br></br>

          <input type="email" name="email" />
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
