import Login from "./Login/Login";
import PersonalTrainerAdd from "./PersonalTrainer/PersonalTrainerAdd";
import "./Home.css";
import { Roles } from "./Helpers/Roles";
import { useAuthContext } from "./Context/auth-context";

function Home() {
  const { tokenPayload } = useAuthContext();
  
  if(!tokenPayload){
    return (
      <div>
        <h1>You're not logged in</h1>
        <Login />
      </div>
    );
  }
  var role = tokenPayload.Role;

  if (role === Roles.Client) {
    return <h1>Welcome Client</h1>;
  } else if (role === Roles.PersonalTrainer) {
    return <h1>Welcome Person Trainer</h1>;
  } else if (role === Roles.Manager) {
    return <PersonalTrainerAdd />;
  } else
    return (
      <div>
        <h1>You're not logged in</h1>
        <Login />
      </div>
    );
}
export default Home;
