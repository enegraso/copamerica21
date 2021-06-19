import { Route } from "react-router-dom";
import "./App.css";
// Imposrts components to route
import Teams from "./components/Teams";
import Intro from "./components/Intro";
import Matches from "./components/Matches";
import Results from "./components/Results";
import Groups from "./components/Groups";
import Prode from "./components/Prode";
import Register from "./components/Register";
import Scores from "./components/Scores";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Intro />
      </Route>
      <Route path="/">
        <Nav />
      </Route>
      <Route path="/equipos">
        <Teams />
      </Route>
      <Route path="/partidos">
        <Matches />
      </Route>
      <Route path="/resultados">
        <Results />
      </Route>
      <Route path="/posiciones">
        <Groups />
      </Route>
      <Route path="/prode">
        <Prode />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/scores">
        <Scores />
      </Route>
    </div>
  );
}

export default App;
