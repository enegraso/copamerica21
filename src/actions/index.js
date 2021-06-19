export function getUser(nameuser, claveuser) {
  return function (dispatch) {
    return fetch(
      "http://cursohenry.ddns.net:3001/user?name=" +
        nameuser +
        "&pass=" +
        claveuser
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_USER_DETAIL", payload: json });
      });
  };
}

export function logOut(arg) {
  return function (dispatch) {
    dispatch({ type: "LOGOUT_USER", payload: arg });
  };
}
