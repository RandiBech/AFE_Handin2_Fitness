import Login from "./Login/Login";
import PersonalTrainerAdd from "./PersonalTrainer/PersonalTrainerAdd";
import "./Home.css";

function Home() {
  var role = localStorage.Roles; //localStorage.PersonalTrainer; //TODO: Husk at rette dette til.
  var role = "Manager";
  console.log(role);
  <PersonalTrainerAdd />;
  if (role != null) {
    return <h1>Welcome</h1>;
  } else if ((role = "Manager")) {
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
