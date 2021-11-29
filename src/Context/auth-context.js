import React from "react";
import { createContext } from "react";
import { useAuth } from "../Helpers/useAuth";

const authContext = createContext();

function useAuthContext() {
    const context = React.useContext(authContext);
    if (!context) {
        throw new Error(`useAuthContext must be used within a AuthProvider`);
    }
    return context;
}

function AuthProvider({children}){
    const authObj = useAuth();

    return(
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>
    );
}

export { useAuthContext, AuthProvider, authContext };