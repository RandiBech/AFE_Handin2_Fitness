import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../Helpers/useAuth";
import { useAuthContext } from "../Context/auth-context";

function RequireAuth({children, roles}) {
    // const {authed, tokenPayload} = useAuth();
    const {authed, tokenPayload} = useAuthContext();

    const presentTimestamp = Math.round((new Date()).getTime() / 1000);
    const expiredToken = presentTimestamp < tokenPayload?.exp;
    const validRole = roles?.includes(tokenPayload?.Role);
    console.log(authed,expiredToken, validRole, tokenPayload)
    return authed && !expiredToken && validRole ? children : <Navigate to="/login" replace/>
}
export default RequireAuth;