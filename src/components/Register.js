import React, { useEffect, useState } from "react";
import Prode from '../components/Prode'
import "../styles/Form.css";
import "../styles/Register.css";

function Register() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
    rpassword: "",
  });
  const [errors, setErrors] = React.useState({});

  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingReg, setIsLoadingReg] = useState(false);

  function fetchData() {
    fetch("http://cursohenry.ddns.net:3001/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setIsLoading(true);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchRegistro(nameuser, claveuser) {
    fetch("http://cursohenry.ddns.net:3001/users", {
      method: "POST",
      body: JSON.stringify({
        name: nameuser,
        pass: claveuser,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => { JSON.stringify(json); setIsLoadingReg(true) }) //  console.log(json)
  }

  function validate(input) {
    var emailPattern = /\S+@\S+\.\S+/; // Expresion Regular para validar Emails.
    var encontrado;
    let errors = {};
    if (!input.username) {
      errors.username = "Username is required";
    } else if (!emailPattern.test(input.username)) {
      errors.username = "Username is invalid";
    } else {
      encontrado = users.find((user) => user.usuario === input.username);
      if (encontrado) {
        errors.username = "Username already exist";
      }
    }
    if (!input.password) {
      errors.password = "Password is required";
    } else if (input.password.length < 6) {
      errors.password = "Password must have 6 characters";
    } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = "Password is invalid";
    }
    if (!input.rpassword) {
      errors.rpassword = "Control Password is required";
    } else if (input.rpassword.length < 6) {
      errors.rpassword = "Control Password must have 6 characters";
    } else if (!/(?=.*[0-9])/.test(input.rpassword)) {
      //(!/(?=.*[0-9])/.test(input.password))
      errors.rpassword = "Control Password is invalid";
    } else if (input.password !== input.rpassword) {
      errors.rpassword = "Control and Passwords not equals";
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
    // funcion que va a despachar la accion getuser (deberia llamarse login)
    e.preventDefault();
    fetchRegistro(input.username,input.password);
    // props.getUser(input.username, input.password);
  }

  if (isLoadingReg) {
      return(
          <Prode register={true} />
      )
  }



  return (
    <div className="regcontainer">
      <div className="boxreg">
        <div className="titreg">Registrate para jugar</div>
        <div className="cuerporeg">
          Ingresa un nombre de usuario y una contraseña rara registrarte
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Usuario: (no es necesario mail verdadero)</label>
              <input
                className={errors.username && "danger"}
                type="text"
                name="username"
                placeholder="usario@copa.21"
                onChange={handleInputChange}
                value={input.username}
              ></input>
              {errors.username && <p className="danger">{errors.username}</p>}
            </div>
            <div>
              <label>
                Contraseña:
                <br />
                (al menos 6 caracteres, contiene un digito)
              </label>
              <input
                className={errors.password && "danger"}
                type="password"
                name="password"
                onChange={handleInputChange}
                value={input.password}
              ></input>
              {errors.password && <p className="danger">{errors.password}</p>}
            </div>
            <div>
              <label>Control Contraseña: </label>
              <input
                className={errors.rpassword && "danger"}
                type="password"
                name="rpassword"
                onChange={handleInputChange}
                value={input.rpassword}
              ></input>
              {errors.rpassword && <p className="danger">{errors.rpassword}</p>}
            </div>
            <div></div>
            <div>
              <button>Registrate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
