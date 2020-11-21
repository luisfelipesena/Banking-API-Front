import { UseFetch } from "../../utils/fetch";

export function useSenha() {
  async function esqueciSenha(email) {
    return true;
  }

  return { esqueciSenha };
}
