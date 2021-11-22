import { useState } from "react/cjs/react.development";
import { useAuth } from "./useAuth";

export async function GetAllClients() {
    const url = 'https://afe2021fitness.azurewebsites.net/api/Users/Clients';
    const {jwtToken} = useAuth();
    const [clients, setClients] = useState();
    await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': "Bearer " + jwtToken },
        })
        .then(res => res.json())
        .then(data => setClients(data))

    return clients;
}