import { UseFetch } from "../../utils/fetch";

export function useCadastro() {
  async function cadastro(email, senha, nome) {
    const request = await UseFetch(
      `https://cubos-banking-api.herokuapp.com/usuarios`,
      "POST",
      {
        email,
        senha,
        nome,
      }
    );
    const response = await request.json();
    if (response.dados && response.dados.id) {
      return true;
    } else {
      return false;
    }
  }

  return { cadastro };
}
