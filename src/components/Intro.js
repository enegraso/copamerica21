import logo from "../copa_logo.png";
import '../styles/Intro.css'

function Intro() {
  return (
    <div className="App boxcontainer">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="subtit">
          Datos de Copa America 2021.
          </div>
    </div>
  );
}

export default Intro;
