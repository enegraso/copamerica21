import { useState, useEffect } from "react";
import Group from "./Group";
import '../styles/Teams.css'

function Groups() {
  const [hasError, setErrors] = useState(false);
  const [groups, setGroups] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Busco enla api creada con express los scores de los equipos
  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/positions")
      .then((response) => response.json())
      .then((json) => {
        setGroups(json); // si encuentro guardo las posiciones
        setIsLoading(true);
      })
      .catch((err) => setErrors(err)); // si hay error
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
    <div className="boxcontainert">
      {/*     Titulo el grupo y muestro a todos los groupid === 1 */}
      <div className="groupscontainer">
        <div className="titgroup"> --- GRUPO A --- </div>
        {groups &&
          groups.map((group) => {
            if (group.groupId === 1)
              return (
                <div key={group.idTeam}>
                  <Group name={group.team} score={group.score} flag={group.flag} />
                </div>
              );
          })}
      </div>
      {/*     Titulo el grupo y muestro a todos los groupid === 2 */}
      <div className="groupscontainer">
        <div className="titgroup"> --- GRUPO B --- </div>
        {groups &&
          groups.map((group) => {
            if (group.groupId === 2)
              return (
                <div key={group.idTeam}>
                  <Group name={group.team} score={group.score}  flag={group.flag}/>
                </div>
              );
          })}
      </div>
    </div>
  );
}

export default Groups;
