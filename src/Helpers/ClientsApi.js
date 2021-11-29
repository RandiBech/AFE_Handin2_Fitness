export async function GetAllClients(jwtToken) {
    const url = 'https://afe2021fitness.azurewebsites.net/api/Users/Clients';
   
    return await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': "Bearer " + jwtToken },
        })
        .then(res => {return res.json()})
}