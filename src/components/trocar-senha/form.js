import { useForm } from "react-hook-form";
import { TrocarSenha } from "./trocar-senha";
import React from "react";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const [, idUser] = window.location.href.split("=");
  const [erro, setErro] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);
  const senha = watch("senha");
  const senhaNovamente = watch("senhaNovamente");

  return (
    <>
      <form
        name="form"
        onSubmit={handleSubmit(async (dados) => {
          if (
            dados.senha &&
            dados.senhaNovamente &&
            dados.senha === dados.senhaNovamente
          ) {
            setCarregando(true);
            const r = await TrocarSenha(dados.senha, Number(idUser));
            setCarregando(false);
            r ? (window.location.href = "/") : setErro(true);
          } else {
            setErro(true);
          }
        })}
      >
        <label>
          <span>Nova Senha</span>
          <input
            className={
              senha != null && senha && !senha
                ? "senhaAtiva"
                : !erro || carregando
                ? ""
                : "erro"
            }
            ref={register}
            name="senha"
            type="password"
          />
        </label>
        <label>
          <span>Digite a senha novamente</span>
          <input
            className={
              senhaNovamente != null && senhaNovamente && !senhaNovamente
                ? "senhaAtiva"
                : !erro || carregando
                ? ""
                : "erro"
            }
            ref={register}
            name="senhaNovamente"
            type="password"
          />
        </label>
        <button
          disabled={!senha === senhaNovamente}
          className={
            senha && senhaNovamente && senha === senhaNovamente
              ? "botaoAtivo recuperar"
              : "recuperar"
          }
        >
          Enviar Senha
        </button>
      </form>
    </>
  );
};
