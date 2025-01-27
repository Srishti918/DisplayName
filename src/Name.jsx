import React, { useState } from "react";

const Name = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [result, setResult] = useState("");
  function handleSubmit(e) {
     e.preventDefault();
    setResult("Full Name: " + fName + " " + lName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <label>
        First Name:
        </label>
        <input
          type="text"
          id="fname"
          value={fName}
          required
          onChange={(e) => setFName(e.target.value)}
          
        />
      
      <br />
      <label>
        Last Name:
        </label>
        <input
          type="text"
          id="lname"
          value={lName}
          required
          onChange={(e) => setLName(e.target.value)}
        />
      
      <br />

      <button type="submit" value="Submit" >
        Submit
      </button>
      <div>{result}</div>
    </form>
  //   <form>
  //   <label htmlFor="name">Name:</label>
  //   <input type="text" id="name" name="name" required />

  //   <label htmlFor="email">Email:</label>
  //   <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" />

  //   <button type="submit">Submit</button>
  // </form>
  );
};

export default Name;
