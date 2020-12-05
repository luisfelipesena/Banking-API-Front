import { UseFetch } from "../../utils/fetch";

export const realizarPagamento = async (token, idDaCobranca) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/cobrancas`,
    "PUT",
    {
      idDaCobranca,
    },
    token
  );
  const response = await request.json();
  if (
    response.dados &&
    response.dados.mensagem === "Cobrança paga com sucesso"
  ) {
    return true;
  } else {
    return false;
  }
};
