import React, { useEffect, useState } from 'react';
import { GetAllClients } from '../Helpers/ClientsApi';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    addBtn: {
        width: '100px',
        height: '30px',
        backgroundColor: '#498787',
        borderRadius: '4px',
        border: 'none',
        margin: '16px',
        alignSelf: 'end',
        color: 'white'
    },
    clients: {
        padding: '0 20px',
        columnCount: 1
    },
    clientItem: {
        textAlign: 'left',
        margin: '8px 0',
        cursor: 'pointer',
        width: '80%',
        border: '1px solid #498787',
        borderRadius: '8px',
        padding: '4px 8px',
        "&:hover": {
            backgroundColor: '#498787',
            color: 'white'
        }
    },
})

function ClientList() {
    const classes = useStyles();
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getClients() {
            await GetAllClients().then(data => {
                setClients(data)
                console.log('data', data)
            });
        }
        getClients();
        console.log(clients);
    }, []);

    function handleClientClick(client) {
        navigate(`/Clients/${client.userId}`, { state: client })
    }

    if (clients.length <= 0) return <div>loading...</div>;

    return (
        <div>
            <div>
                <h2>Clients</h2>
                <button className={classes.addBtn}>Add client</button>
            </div>
            <div className={classes.clients}>
                {clients.map((client, i) =>
                (
                    <div onClick={() => handleClientClick(client)} key={i} className={classes.clientItem}>
                        {client.firstName} {client.lastName}, email: {client.email}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ClientList;