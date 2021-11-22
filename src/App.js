import "./App.css";
import Login from "./Login/Login";
import Home from "./Home";
import { useEffect, useState } from "react";
import { Navbar } from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutList from "./WorkoutProgram/WorkoutProgramList";

function App() {
  const [decodedTokenHeader, setDecodedToken] = useState();
  const [decodedTokenPayload, setDecodedPayload] = useState();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      const tokenArray = jwtToken.split(".");
      const tokenHeader = tokenArray[0];
      const tokenPayload = tokenArray[1].split(".")[0];
      setDecodedToken(window.atob(tokenHeader));
      setDecodedPayload(window.atob(tokenPayload));
    }
  }, []);

  function onLoggedIn() {
    const newJwtToken = localStorage.getItem("jwtToken").split(".");
    console.log(newJwtToken);
    setDecodedToken(window.atob(newJwtToken[0]));

    const newTokenArray = localStorage.getItem("jwtToken").split(".");
    const newTokenHeader = newTokenArray[0];
    const newTokenPayload = newTokenArray[1].split(".")[0];
    setDecodedToken(window.atob(newTokenHeader));
    setDecodedPayload(window.atob(newTokenPayload));
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        {decodedTokenPayload ? <Home /> : <Login onLoggedIn={onLoggedIn} />}
      </div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/WorkoutList" element={<WorkoutList />} />
      </Routes>
    </Router>
  );
}

export default App;
