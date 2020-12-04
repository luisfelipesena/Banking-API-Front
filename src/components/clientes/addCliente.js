import { UseFetch } from "../../utils/fetch";

export const addCliente = async (token, nome, cpf, email, tel) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/clientes`,
    "POST",
    {
      nome,
      cpf,
      email,
      tel,
    },
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.id) {
    return true;
  } else {
    return false;
  }
};
