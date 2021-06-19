import { useState, useEffect } from "react";
import Result from "./Result";
import "../styles/Teams.css";

function Results() {
  const [hasError, setErrors] = useState(false);
  const [matches, setMatches] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/results")
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
    <div>  
      <div className="boxcontainert">
        {matches &&
          matches.map((match) => {
            return (
              <div key={match.idMatch}>
                <Result date={match.dateMatch} local={match["teams.team"]} visitante={match["teams_1.team"]} 
                lflag={match["teams.flag"]} vflag={match["teams_1.flag"]} lresult={match.hostResult} vresult={match.guestResult} mresult={match.matchResult}/> 
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Results;