import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setError(""); // Clear error on input change
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!firstName.trim() || !lastName.trim()) {
      setError("Both First Name and Last Name are required.");
      return;
    }

    setFullName(`${firstName.trim()} ${lastName.trim()}`);
    setError(""); // Clear error if successful
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstName}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastName}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {fullName && (
        <h2>
          Full Name: <span>{fullName}</span>
        </h2>
      )}
    </div>
  );
}

export default App;
