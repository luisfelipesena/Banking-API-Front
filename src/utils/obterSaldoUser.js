import { UseFetch } from "./fetch";

export const SaldoUser = async () => {
  const token = localStorage.getItem("token");
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/relatorios`,
    "GET",
    undefined,
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.relatorio) {
    return response.dados.relatorio.saldoEmConta;
  } else {
    window.location.href = "/";
  }
};
