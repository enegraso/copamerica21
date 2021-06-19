import { useState, useEffect } from "react";
import Team from "./Team";
import "../styles/Team.css";

function Teams() {
  const [hasError, setErrors] = useState(false);
  const [teams, setTeams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/teams")
      .then((response) => response.json())
      .then((json) => {
        setTeams(json);
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
        {teams &&
          teams.map((equip) => {
            return (
              <div key={equip.idTeam}>
                <Team team={equip.team} flag={equip.flag} info={equip.info} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Teams;
