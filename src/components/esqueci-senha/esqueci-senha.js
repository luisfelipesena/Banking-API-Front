import { UseFetch } from "../../utils/fetch";

export function useSenha() {
  async function esqueciSenha(email) {
    const request = await UseFetch(
      `https://cubos-banking-api.herokuapp.com/resetPasswordEmail`,
      "POST",
      {
        email,
      }
    );
    const response = await request.json();
    if (response.dados && response.dados.result) {
      return true;
    } else {
      return false;
    }
  }

  return { esqueciSenha };
}
