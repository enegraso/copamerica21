import { connect } from "react-redux";
import { React } from "react";
import { logOut } from "../actions/index";
import Login from "./Login";
import { Link } from "react-router-dom";
import "../styles/Prode.css";

function Prode(props) {


  console.log(props.userDetail.length);
  if (!props.userDetail.length) {
    return <Login register={props.register} />;
  }

  return (
    <div className="boxcontainerp">
      <div className="boxprode">
        <div className="titprode">HOLA {props.userDetail[0].usuario}</div>
        <div className="cuerpo">
          Reglas del juego.
          <br />
          Podrás pronosticar el resultado de los próximos partidos de la copa
          <br />
          Todos los usuarios estarán en una tabla de posiciones global
          <br />
          (si llego con el tiempo agregaré torneo de amigos)
          <br />
          Por registrarte te damos un premio de 5 puntos! <br />
          Si aciertas el resultado correcto obtendrás 10 puntos
          <br />
          Si no aciertas el resultado exacto pero si el ganador o empate,
          sumarás 5 puntos
          <br />
          Recuerda que no puedes modificar tu pronóstico una vez realizado,
          piénsalo bien!
          <br />
        </div>
        <div className="boxresult">
          <div>
          <Link to="/games"><span>-   Listar juegos   -</span></Link>
          </div><div>
          <Link to="/scores"><span>-   Posiciones   -</span></Link>
          </div>
        </div>
        <div className="cuerpo">
          Tu puntaje actual es: {props.userDetail[0].score} puntos{" "}
        </div>
        <div className="botprode">
          <button onClick={() => props.logOut(props.userDetail[0].idusuario)}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userDetail: state.userDetail,
  };
}

export default connect(mapStateToProps, { logOut })(Prode);
