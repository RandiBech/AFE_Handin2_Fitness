import React, { useEffect, useState } from 'react';
import { GetAllClients } from '../Helpers/ClientsApi';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    addBtn: {
        width: '100px',
        height: '30px',
        backgroundColor: '#498787',
        borderRadius: '4px',
        border: 'none',
        margin: '16px',
        alignSelf: 'end'
    },
    clients: {
        padding: '0 20px'
    },
    clientItem: {
        textAlign: 'left',
        margin: '8px 0',
        cursor: 'pointer'
    },
    line: {
        height: '0.5px',
        backgroundColor: 'black',
        width: '80%'
    }
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
        navigate('/Clients/' + client.userId, { state: client })
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
                    <>
                    <button onClick={() => handleClientClick(client)} key={i} className={classes.clientItem}>
                        {client.firstName} {client.lastName}, email: {client.email}
                    </button>
                    
                    {/* <Link to={{ 
                        pathname: "/Clients/" + client.userId, 
                        state: client 
                        }} key={i} className={classes.clientItem}>
                        {client.firstName} {client.lastName}, email: {client.email}
                    </Link> */}
                        <div className={classes.line}></div>
                    </>
                ))}
            </div>
        </div>
    )
}
export default ClientList;