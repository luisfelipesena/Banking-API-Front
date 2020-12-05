import { UseFetch } from "../../utils/fetch";

export const editarCliente = async (
  token,
  id,
  nome = null,
  email = null,
  tel = null
) => {
  const request = await UseFetch(
    `https://cubos-banking-api.herokuapp.com/clientes`,
    "PUT",
    {
      id,
      nome,
      email,
      tel,
    },
    token
  );
  const response = await request.json();
  if (response.dados && response.dados.id) {
    return true;
  } else {
    console.log("i");
    return false;
  }
};
