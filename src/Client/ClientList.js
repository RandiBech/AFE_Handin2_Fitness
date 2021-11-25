import { useState } from "react/cjs/react.development";
import { GetAllClients } from "../Helpers/ClientsApi";

function Clients(){
    const clientList = GetAllClients();
    const [clients, setClients] = useState()
    console.log(clientList);
    return(
        <div>
            hello!
        </div>
    )
}
export default Clients;