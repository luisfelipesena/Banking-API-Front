import { UseFetch } from "../../utils/fetch";

export const getClients = async (token, off) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/clientes?clientesPorPagina=10&offset=${off}`,
    "GET",
    undefined,
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.clientes) {
    return response.dados.clientes;
  } else {
    return false;
  }
};

export const getClientsSearch = async (token, off, busca) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/clientes?busca=${busca}&clientesPorPagina=10&offset=${off}`,
    "GET",
    undefined,
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.clientes) {
    return response.dados.clientes;
  } else {
    return false;
  }
};
