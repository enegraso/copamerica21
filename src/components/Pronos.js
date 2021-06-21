import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Prono from "./Prono";
import "../styles/Pronos.css";

function Pronos() {
  const [hasError, setErrors] = useState(false);
  const [matches, setMatches] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/matches")
      .then((response) => response.json())
      .then((json) => {
        setMatches(json);
        setIsLoading(true);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    return null;
  }
  if (hasError) {
    return null;
  }

  return (
    <div className="container">
      <div className="boxpartido">
        <div className="subtitu">
          Pronosticá los partidos que aun no se esten jugando, si ya lo
          pronosticaste, podes modificarlo hasta 15' antes del comienzo.
          <br />
          Escribí el resultado deseado y haz click en pronosticar (quizas 2
          veces)
          <br />
        </div>
        {matches &&
          matches.map((match) => {
            return (
              <div className="listadop" key={match.idMatch}>
                <Prono
                  match={match.idMatch}
                  date={match.dateMatch}
                  local={match["teams.team"]}
                  visitante={match["teams_1.team"]}
                  lflag={match["teams.flag"]}
                  vflag={match["teams_1.flag"]}
                />
              </div>
            );
          })}
        <div className="subtitu">
          Recuerda que puedes jugar entre las 10 y las 23 horas que es el
          horario que estará encendido el server que sostiene el backend
          <br />
        </div>
      </div>
              <Link to="/prode">Volver</Link>
    </div>
  );
}

export default Pronos;
