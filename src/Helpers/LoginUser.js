export async function login(email, password){
    const url = 'https://afe2021fitness.azurewebsites.net/api/Users/login';

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => localStorage.setItem('jwtToken', data.jwt)) 
}