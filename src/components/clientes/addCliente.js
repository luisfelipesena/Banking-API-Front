import { UseFetch } from "../../utils/fetch";
import { cpf } from "cpf-cnpj-validator";

export const addCliente = async (token, nome, Cpf, email, tel) => {
  if (!cpf.isValid(Cpf)) {
    return null;
  }
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/clientes`,
    "POST",
    {
      nome,
      cpf: cpf.format(Cpf),
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
