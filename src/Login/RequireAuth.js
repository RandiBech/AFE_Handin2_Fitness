import React from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../Context/auth-context";


function RequireAuth({children, rolesRequired}) {
    const {authed, tokenPayload} = useAuthContext();

    const presentTimestamp = Math.round((new Date()).getTime() / 1000);
    const expiredToken = presentTimestamp > tokenPayload?.exp;
    const validRole = rolesRequired?.includes(tokenPayload?.Role);
    console.log('authed:', authed,'expiredToken:', expiredToken, 'validRole', validRole, 'tokenPayload:', tokenPayload)

    return authed && !expiredToken && validRole ? children : <Navigate to="/login" replace/>
}
export default RequireAuth;