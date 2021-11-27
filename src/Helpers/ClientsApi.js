import { useState } from "react/cjs/react.development";
import { useAuth } from "./useAuth";

export async function GetAllClients() {
    const url = 'https://afe2021fitness.azurewebsites.net/api/Users/Clients';
    // const {jwtToken} = useAuth();
    const jwtToken = localStorage.getItem('jwtToken');
    // const [clients, setClients] = useState();
    return await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': "Bearer " + jwtToken },
        })
        .then(res => {return res.json()})
        // .then(data => setClients(data))

    // return clients;
}