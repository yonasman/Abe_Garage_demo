import styles from "./AddEmployee.module.css";
import { useState } from "react";

function AddEmployee() {
  // state variables to handle form submit
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };

    // api url
    const apiUrl = "http://localhost:2020/add-employee";

    // set request options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      console.log(result);
       // reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className={styles.employee_container}>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="f_name">First Name:</label>
          <input
            type="text"
            id="f_name"
            name="f_name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <label htmlFor="l_name">Last Name:</label>
          <input
            type="text"
            id="l_name"
            name="l_name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default AddEmployee;
