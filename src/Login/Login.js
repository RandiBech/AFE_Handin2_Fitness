import React, { useState } from "react";
import { login } from "../Helpers/LoginUser";

function Login({onLoggedIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }
    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    async function handleLogin(event){
        event.preventDefault();
        await login(email, password);
        onLoggedIn();
    }

return(
    <div>This is the login page
        <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleChangeEmail}/>
            <label>Password:</label>
            <input type="password" value={password} onChange={handleChangePassword}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
)
}

export default Login;