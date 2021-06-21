import logo from "../copa_logo.png";
import "../styles/Intro.css";

function Intro() {
  return (
    <div className="App boxcontainer">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="subtit">Datos de Copa America 2021.</div>
      <div className="subtitu">
        Informacion de copa America y posibilidad de pronosticar resultados y jugar sumando puntos
        <br />
        Recuerda que puedes jugar entre las 10 y las 23 horas que es el horario
        que estará encendido el server que sostiene el backend
      </div>
    </div>
  );
}

export default Intro;
