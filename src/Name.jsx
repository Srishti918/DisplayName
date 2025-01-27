import React, { useState } from "react";

const Name = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [result, setResult] = useState("");
  const [error,setError] = useState("");
  function handleSubmit(e) {
     e.preventDefault();
     if (!fName || !/^[A-Za-z\s]+$/.test(fName) || !lName || !/^[A-Za-z\s]+$/.test(lName)) {
      setError('Please enter a valid full name (only letters and spaces)');
    } else {
      setResult("Full Name: " + fName + " " + lName);
    }
    
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" value="Submit" >
        Submit
      </button>
      <div>{result}</div>
    </form>
 
  );
};

export default Name;
