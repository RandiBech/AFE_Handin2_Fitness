import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/auth-context";
import jwtDecode from 'jwt-decode';

function useAuth() {
    // const [auth, setAuth] = useAuthContext();
    const [authed, setAuthed] = useState();
    const [tokenPayload, setTokenPayload] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const navigate = useNavigate();

    function onLoggedIn(jwtToken) {
        localStorage.setItem('jwtToken', jwtToken);
        setAuthed(true);
        setJwtToken(jwtToken);
        const tokenArray = jwtToken.split(".");

        //window.atob decodes base-64 string: https://www.w3schools.com/jsref/met_win_atob.asp
        const payload = window.atob(tokenArray[1].split(".")[0]);
        const payloadObj = JSON.parse(payload);
        
        setTokenPayload(payloadObj);

        navigate("/");
    }
    function login(email, password) {
        const url = 'https://afe2021fitness.azurewebsites.net/api/Users/login';
    
        async function f() {
            await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
            })
            .then(res => res.json())
            .then(data => onLoggedIn(data.jwt))
        }
        f();
    }

    function logout(){
        localStorage.removeItem('jwtToken')
        setAuthed(false);
    }

    return {
        authed,
        jwtToken,
        tokenPayload,
        login,
        logout
    }
}


export { useAuth };