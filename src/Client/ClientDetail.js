import React from 'react';

import { useLocation } from "react-router";

function ClientDetail(){
    const location = useLocation();
    const client = location.state;
    console.log('client', location.state )



    return (
        <div>
            <h2>Client details</h2>
            <p>
                Name: {client.firstName} {client.lastName}
            </p>
            <p>
                Email: {client.email}
            </p>
            <div>
                
            </div>
        </div>
    )
}

export default ClientDetail;