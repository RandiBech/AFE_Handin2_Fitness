import React, { useEffect, useState } from "react";
import { GetAllClients } from "../Helpers/ClientsApi";
import { makeStyles } from "@mui/styles";
import { ClientAdd } from "./ClientAdd";
import { Route } from "react-router";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  addBtn: {
    width: "100px",
    height: "30px",
    backgroundColor: "#498787",
    borderRadius: "4px",
    border: "none",
    margin: "16px",
    alignSelf: "end",
  },
  clients: {
    padding: "0 20px",
  },
  clientItem: {
    textAlign: "left",
    margin: "8px 0",
  },
  line: {
    height: "0.5px",
    backgroundColor: "black",
    width: "80%",
  },
});

function ClientList() {
  const classes = useStyles();
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  // Inspo for navigation: https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
  const handleAddClient = () => {
    navigate("addClient");
  };

  useEffect(() => {
    async function getClients() {
      await GetAllClients().then((data) => {
        setClients(data);
        console.log("data", data);
      });
    }
    getClients();
    console.log(clients);
  }, []);

  if (clients.length <= 0) return <div>loading...</div>;

  return (
    <div>
      <div>
        <h2>Clients</h2>
        <button className={classes.addBtn} onClick={handleAddClient}>
          Add client
        </button>
      </div>
      <div className={classes.clients}>
        {clients.map((client, i) => (
          <>
            <div key={i} className={classes.clientItem}>
              {client.firstName} {client.lastName}, email: {client.email}
            </div>
            <div className={classes.line}></div>
          </>
        ))}
      </div>
    </div>
  );
}
export default ClientList;
