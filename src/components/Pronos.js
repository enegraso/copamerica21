import { useState, useEffect } from "react";
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
      {matches &&
          matches.map((match) => {
            return (
              <div className="listadop" key={match.idMatch}>              
                <Prono match={match.idMatch} date={match.dateMatch} local={match["teams.team"]} visitante={match["teams_1.team"]} 
                lflag={match["teams.flag"]} vflag={match["teams_1.flag"]} /> 
              </div>
            );
          })}
          </div>
    </div>
  );
}

export default Pronos;
