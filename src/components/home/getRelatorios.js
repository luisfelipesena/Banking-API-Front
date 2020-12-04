import { UseFetch } from "../../utils/fetch";

export async function Relatorio(token, temporalidadeGeral) {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/relatorios?tempT=${temporalidadeGeral}`,
    "GET",
    undefined,
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.relatorio) {
    return response.dados.relatorio;
  } else {
    return false;
  }
}
