import { Link } from "react-router-dom";
import Login from "./Login/Login";
import { Roles } from "./Helpers/Roles";
import "./Home.css";
import ClientList from "./Client/ClientList";
import WorkoutProgramList from "./WorkoutProgram/WorkoutProgramList";
function Home() {
  var role = localStorage.Roles; //localStorage.PersonalTrainer; //TODO: Husk at rette dette til.

  if (role != null) {
    return <h1>Welcome</h1>;
  } else
    return (
      <div>
        <h1>You're not logged in</h1>
        <Login />
      </div>
    );
  // if (role === Roles.Manager) {
  //   return (
  //     <div>
  //       <h1>Welcome {role}!</h1>
  //       {/* <CreatePersonalTrainer /> */}
  //     </div>
  //   );
  // } else if (role === Roles.PersonalTrainer) {
  //   return (
  //     <div>
  //       <h1>Welcome: Personal Trainer!</h1>
  //       {/* <CreateClients />; */}
  //       <div class="container">
  //         <div id="split_left" class="parent">
  //           <WorkoutProgramList />
  //         </div>
  //         <div id="split_right" class="parent">
  //           <ClientList />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else if (role === Roles.Client) {
  //   return (
  //     <div>
  //       <h1>Welcome: Client!</h1>
  //       <WorkoutProgramList />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>Welcome stranger! You need to login</h1>
  //       <Link to="login">Login</Link>
  //     </div>
  //   );
  // }
}
export default Home;
