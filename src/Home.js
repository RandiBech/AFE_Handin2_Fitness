import { Link } from "react-router-dom";
import Login from "./Login/Login";
import WorkoutOverview from "./WorkoutProgram/WorkoutOverview";
import { Roles } from "./Helpers/Roles";
import "./Home.css";
import ClientList from "./Client/ClientList";
function Home() {
  var role = "PersonalTrainer"; //localStorage.PersonalTrainer; //TODO: Husk at rette dette til.
  if (role === Roles.Manager) {
    return (
      <div>
        <h1>Welcome {role}!</h1>
        {/* <CreatePersonalTrainer /> */}
      </div>
    );
  } else if (role === Roles.PersonalTrainer) {
    return (
      <div>
        <h1>Welcome: Personal Trainer!</h1>
        {/* <CreateClients />; */}
        <div class="container">
          <div id="split_left" class="parent">
            <WorkoutOverview />
          </div>

          <div id="split_right" class="parent">
            <ClientList />
          </div>
        </div>
      </div>
    );
  } else if (role === Roles.Client) {
    return (
      <div>
        <h1>Welcome: Client!</h1>
        <WorkoutOverview />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome stranger! You need to login</h1>
        <Link to="login">Login</Link>
      </div>
    );
  }
}
export default Home;
