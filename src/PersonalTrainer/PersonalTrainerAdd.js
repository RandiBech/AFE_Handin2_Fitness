import React, { useState } from "react";

function PersonalTrainerAdd() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumitClient = async () => {
    fetch("https://afe2021fitness.azurewebsites.net/api/Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        accountType: "PersonalTrainer",
      }),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="add-client">
      <h2>Add Personal Trainer</h2>
      <form onSubmit={handleSumitClient}>
        <label>
          First name:
          <input
            type="text"
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <br />
        <div>
          <button
            type="submit"
            value="Submit"
            onClick={(e) => {
              e.preventDefault();
              handleSumitClient();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalTrainerAdd;
