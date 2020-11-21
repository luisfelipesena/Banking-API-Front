import React from "react";
import { UseFetch } from "../../utils/fetch";

export function useLogin() {
  const [token, setToken] = React.useState(localStorage.getItem("token"));

  React.useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  async function login(email, senha) {
    const request = await UseFetch(
      `https://cubos-banking-api.herokuapp.com/auth`,
      "POST",
      {
        email,
        senha,
      }
    );
    const response = await request.json();
    if (response.dados && response.dados.token) {
      setToken(response.dados.token);
      localStorage.setItem("token", response.dados.token);
      return true;
    } else {
      return false;
    }
  }

  function logout() {
    setToken(null);
  }
  return { token, login, logout };
}
