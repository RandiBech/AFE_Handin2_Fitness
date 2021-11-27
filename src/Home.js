import { Link } from "react-router-dom";
import Login from "./Login/Login";
import WorkoutOverview from "./WorkoutProgram/WorkoutOverview";
import { Roles } from "./Helpers/Roles";

function Home() {
  var role = Roles.PersonalTrainer; //TODO: Husk at rette dette til.
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
        <h1>Welcome {role}!</h1>
        {/* <CreateClients />; */}
        <WorkoutOverview />;
      </div>
    );
  } else if (role === Roles.Client) {
    return (
      <div>
        <h1>Welcome {role}!</h1>
        <h3></h3>
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
