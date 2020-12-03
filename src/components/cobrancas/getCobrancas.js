import { UseFetch } from "../../utils/fetch";

export const getCobrancasSearch = async (token, off, busca) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/cobrancas?busca=${busca}&cobrancasPorPagina=10&offset=${off}`,
    "GET",
    undefined,
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.cobrancas) {
    return response.dados.cobrancas;
  } else {
    return false;
  }
};

export const getCobrancas = async (token, off) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=${off}`,
    "GET",
    undefined,
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.cobrancas) {
    return response.dados.cobrancas;
  } else {
    return false;
  }
};
