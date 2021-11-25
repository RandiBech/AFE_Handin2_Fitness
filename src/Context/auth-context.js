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
    // const auth = useAuthContext();
    const authObj = useAuth();
    // const [auth, setAuth] = React.useState(authObj);
    // const value = React.useMemo(() => [auth, setAuth], [auth]);
    return(
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>
    );
}

export { useAuthContext, AuthProvider, authContext };