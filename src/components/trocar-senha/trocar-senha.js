import { UseFetch } from "../../utils/fetch";

export const TrocarSenha = async (senha, id) => {
  const response = await UseFetch(
    "https://cubos-banking-api.herokuapp.com/resetPassword",
    "PUT",
    {
      senha,
      userId: id,
    }
  );
  if (response.dados && response.dados.result) {
    return true;
  } else {
    return false;
  }
};
