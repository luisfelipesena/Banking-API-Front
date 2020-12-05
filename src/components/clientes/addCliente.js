import { UseFetch } from "../../utils/fetch";
const cpf = require("node-cpf");

export const addCliente = async (token, nome, Cpf, email, tel) => {
  if (!cpf.validate(Cpf)) {
    return null;
  }
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/clientes`,
    "POST",
    {
      nome,
      cpf: cpf.length !== 11 ? cpf.mask(Cpf) : Cpf,
      email,
      tel,
    },
    token
  );
  const response = await request.json();
  console.log(response);
  if (response.dados && response.dados.id) {
    return true;
  } else {
    return false;
  }
};
