import React, { useEffect, useState } from "react";
import { GetAllClients } from "../Helpers/ClientsApi";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/auth-context";

const useStyles = makeStyles({
  addBtn: {
    width: "100px",
    height: "30px",
    backgroundColor: "#498787",
    borderRadius: "4px",
    border: "none",
    margin: "16px",
    alignSelf: "end",
    color: "white",
  },
  clients: {
    padding: "0 20px",
  },
  clientItem: {
    textAlign: "left",
    margin: "8px 0",
    cursor: "pointer",
    width: "500px",
    border: "1px solid #498787",
    borderRadius: "8px",
    padding: "4px 8px",
    "&:hover": {
      backgroundColor: "#498787",
      color: "white",
    },
  },
});

function ClientList() {
  const classes = useStyles();
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  const {jwtToken} = useAuthContext();

  // Inspo for navigation: https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
  const handleAddClient = () => {
    navigate("/Clients/addClient");
  };

  useEffect(() => {
    async function getClients() {
      await GetAllClients(jwtToken).then((data) => {
        setClients(data);
      });
    }
    getClients();
  }, []);

  function handleClientClick(client) {
    navigate(`/Clients/${client.userId}`, { state: client });
  }

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
          <div
            onClick={() => handleClientClick(client)}
            key={i}
            className={classes.clientItem}
          >
            {client.firstName} {client.lastName}, email: {client.email}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ClientList;
