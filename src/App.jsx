import { useState } from 'react';
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] =  useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstName = (e) => {
    let value = e.target.value;
    console.log("First name",value);
    setFirstName(value);
  }

  const handleLastName = (e) => {
    let value = e.target.value;
    console.log("LastName",value);
    setLastName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    setFullName(firstName + ' ' + lastName);
  }

  return (
   
      <div>
        <h1>Full name Display </h1>
        <form onSubmit={handleSubmit}>
          <label>First Name : </label>
          <input type="text" name="firstName"  id='firstName' value={firstName} onChange={handleFirstName}  required/>
          <br />
          <br />
          <label>Last Name : </label>
          <input type="text" name="lastName" id='lastName' value={lastName} onChange={handleLastName} required/>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>

        <h2>Full Name :  {fullName}</h2>
      </div>

  )
}

export default App
