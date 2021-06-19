import { Link } from "react-router-dom";
import "../styles/Nav.css";

//navbar of pryect
function Nav() {
  return (
    <div className="navbar">
      <Link to="/equipos">🏆 Participan</Link>
      <Link to="/partidos">🏆 Partidos</Link>
      <Link to="/resultados">🏆 Resultados</Link>
      <Link to="/posiciones">🏆 Posiciones</Link>
      <Link to="/prode">😊 Jugar</Link>
    </div>
  );
}

export default Nav;
