import React, { useState } from "react";
import { useAuthContext } from "../Context/auth-context";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext();

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }
    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    function handleLogin(event){
        event.preventDefault();
        login(email, password)
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