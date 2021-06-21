import React, { useEffect, useState } from "react";
import Score from "./Score"
import '../styles/Scores.css'

function Scores(props) {
  const [hasError, setErrors] = useState(false);
  const [userspos, setUsersPos] = useState({});
  const [isLoadingPos, setIsLoadingPos] = useState(false);

  function fetchUsers() {
    fetch("http://cursohenry.ddns.net:3001/users")
      .then((response) => response.json())
      .then((json) => {
        setUsersPos(json);
        setIsLoadingPos(true);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // if (!props) return null
  if (!isLoadingPos) {
    return null;
  }
   if (hasError) {
    return null;
  }  
  var pos=1
  return (
    <div className="containerscore">
      <div className="boxscores">
      <div className="titscore">Tabla de posiciones de jugadores</div>
      { 
      userspos && userspos.map((user) => {
        
        return (
            <div className="listado" key={user.idusuario}>
        <div>
          <Score usuario={user.usuario} score={user.score} pos={pos++} />
        </div>
        </div>
        
        )
      })}
      </div>
    </div>
  );
}

export default Scores;
