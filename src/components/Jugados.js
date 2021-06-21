import Jugado from "./Jugado";
import React, { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import "../styles/Pronos.css";

function Jugados(props) {
  const [hasError, setErrors] = useState(false);
  const [matches, setMatches] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/pronos?iduser=" + props.userDetail[0].idusuario)
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
      <h1>Ya pronosticados</h1>
      {matches &&
        matches.map((match) => {
          return (
            <div className="listadop" key={match.idProno}>
              <Jugado
                idplayer={props.userDetail[0].idusuario}
                match={match.idProno}
                local={match["teams.team"]}
                visitante={match["teams_1.team"]}
                lscore={match["prode.hostResult"]}
                vscore={match["prode.guestResult"]}
                points={match.points}
              />
            </div>
          );
        })}
        </div>
        <Link to="/prode">Volver</Link>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        userDetail: state.userDetail,
      }
}

export default connect(mapStateToProps,null) (Jugados);
