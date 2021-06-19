import React, { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Tabla de posiciones de jugadores</h1>
      {userspos && userspos.map((user) => {
        return (
            <div key={user.idusuario}>
        <div>
            {user.usuario} - {user.score}
        </div>
        </div>
        )
      })}
    </div>
  );
}

export default Scores;
