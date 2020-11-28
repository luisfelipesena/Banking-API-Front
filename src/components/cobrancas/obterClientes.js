import { UseFetch } from "../../utils/fetch";

export const ObterClientes = async (token) => {
  const request = await UseFetch(
    "https://cubos-banking-api.herokuapp.com/clientes?clientesPorPagina=all&offset=0",
    "GET",
    undefined,
    token
  );

  if (request) {
    const clientes = await request.json();
    if (clientes.dados?.clientes) {
      return clientes.dados.clientes;
    }
  }
  window.location.href = "/";
};
