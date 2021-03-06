import { UseFetch } from "../../utils/fetch";

export const CriarCobranca = async (
  idDoCliente,
  descricao,
  valor,
  vencimento,
  token
) => {
  const request = await UseFetch(
    "https://cubos-banking-api.herokuapp.com/cobrancas",
    "POST",
    {
      idDoCliente: idDoCliente,
      descricao,
      valor: valor * 100,
      vencimento,
    },
    token
  );

  if (request) {
    const cobranca = await request.json();
    if (cobranca.dados?.cobranca) {
      return true;
    }
  }
  return false;
};
