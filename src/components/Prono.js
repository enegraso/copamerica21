import { connect } from "react-redux";
import React, { useState } from "react";

function Prono(props) {
  const [input, setInput] = React.useState({
    lscore: "",
    vscore: "",
  });
  const [errors, setErrors] = React.useState({});
  // variables para agregar resultado pronostico
  const [resultProd, setResultProd] = useState({});
  const [isLoadingProd, setIsLoadingProd] = useState(false);
  const [hasError, setHasErrors] = useState(false);
  // verifico si ya esta pronosticado para cambiar el promostico
  const [resultProdes, setResultProdes] = useState({});
  const [isLoadingProdes, setIsLoadingProdes] = useState(false);
  const [hasErrorProdes, setHasErrorProdes] = useState(false);

  // Funcion que va a enviar el pronostico
 
  function AsignResult() {
    fetch(
      "http://cursohenry.ddns.net:3001/prodes?iduser=" +
        props.userDetail[0].idusuario +
        "&idmatch=" +
        props.match
    )
      .then((response) => response.json())
      .then((json) => {
        setResultProdes(json);
        setIsLoadingProdes(true);
      })
      .catch((err) => setErrors(err));

    if (!isLoadingProdes) {
    } else {
      console.log(resultProdes)
      if (!resultProdes.length) {
        /*           fetchProno(
            props.userDetail[0].idusuario,
            props.match,
            input.lscore,
            input.vscore
          ); */
        fetch("http://cursohenry.ddns.net:3001/prode", {
          method: "POST",
          body: JSON.stringify({
            userid: props.userDetail[0].idusuario,
            matchid: props.match,
            lresult: input.lscore,
            vresult: input.vscore,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            JSON.stringify(json);
            setIsLoadingProd(true);
          }); //  console.log(json)
      } else {
        console.log(resultProdes[0].idProno)
        fetch("http://cursohenry.ddns.net:3001/results", {
          method: "PUT",
          body: JSON.stringify({
            matchid: resultProdes[0].idProno,
            lresult: input.lscore,
            vresult: input.vscore,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            JSON.stringify(json);
            setIsLoadingProd(true);
          }); //  console.log(json)
      }
    }
  }


  function validate(input) {
    if (input.lscore < 0) {
      errors.lscore = "Local score is invalid";
    } else if (input.vscore < 0) {
      errors.vscore = "Visitor score is invalid";
    }
    return errors;
  }

  const handleInputChange = function (e) {
    // validate(e.target.name,e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  function handleSubmit(e) {
    // aqui llamare a la funcion que llene el resultado)
    e.preventDefault();
    AsignResult();
  }

  if (isLoadingProd) {
    return (
      <div>
        Pronostico {props.local} {input.lscore} vs {props.visitante}{" "}
        {input.vscore}
      </div>
    );
  }
 
  return (
    <div>
      <form>
        <div>
          {props.local}
          <input
           className={errors.lscore && "danger"}
            type="number"
            name="lscore"
            onChange={handleInputChange}
            value={input.lscore}
            style={{ width: "30px" }}
            min="0"
          />
        {errors.lscore && <p className="danger">{errors.lscore}</p>} -
          {props.visitante}
          <input
             className={errors.vscore && "danger"} 
            type="number"
            name="vscore"
            onChange={handleInputChange}
            value={input.vscore}
            style={{ width: "30px" }}
            min="0"
          />
         {errors.vscore && <p className="danger">{errors.vscore}</p>} 
          <button onClick={handleSubmit}>pronosticar</button>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userDetail: state.userDetail,
  };
}

export default connect(mapStateToProps, null)(Prono);
