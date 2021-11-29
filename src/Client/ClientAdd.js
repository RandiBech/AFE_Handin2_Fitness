import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import "./ClientAdd.css";
// Inspo from demo forms-demos: MultipleInput.js
// Inspo from https://www.youtube.com/watch?v=IkMND33x0qQ & https://www.youtube.com/watch?v=EcRFYF4B3IQ
export function ClientAdd() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Temp: TODO - Delete
  const jwtToken = localStorage.getItem("jwtToken");
  const tokenArray = jwtToken.split(".");
  const payload = window.atob(tokenArray[1].split(".")[0]);
  const payloadObj = JSON.parse(payload);

  console.log("payload", payloadObj);
  console.log("payload", payloadObj.UserId);
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
        personalTrainerId: payloadObj.UserId,
        accountType: "Client",
      }),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="add-client">
      <h2>Add Client</h2>
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
