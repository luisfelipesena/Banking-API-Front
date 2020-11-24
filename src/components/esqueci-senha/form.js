import { useForm } from "react-hook-form";
import { useSenha } from "./esqueci-senha";
import React from "react";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const { esqueciSenha } = useSenha();

  const [erro, setErro] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);
  const [recuperar, setRecuperar] = React.useState(false);

  const email = watch("email");

  return (
    <>
      {!recuperar ? (
        <form
          name="form"
          onSubmit={handleSubmit(async (dados) => {
            if (dados.email) {
              setCarregando(true);
              const r = await esqueciSenha(dados.email);
              setCarregando(false);
              r ? setRecuperar(true) : setErro(true);
            }
          })}
        >
          <label>
            <p className="descricao">
              Informe o e-mail associado a sua conta e vamos te enviar
              instruções para resetar sua senha
            </p>
          </label>
          <label>
            <span>Email</span>
            <input
              className={
                email != null && email && !erro
                  ? "emailAtivo"
                  : !erro || carregando
                  ? ""
                  : "erro"
              }
              ref={register}
              name="email"
              type="email"
              placeholder="exemplo@gmail.com"
            />
          </label>
          <button
            disabled={!email}
            className={email ? "botaoAtivo recuperar" : "recuperar"}
          >
            Recuperar Senha
          </button>
        </form>
      ) : (
        <div className="confirirEmail">
          <div>
            <img src="../../../assets/email.svg" alt="email" />
            <h2>Confira seu e-mail</h2>
            <div>
              <p>Enviamos as instruções para</p>
              <p>recuperação de senha</p>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="botaoAtivo entendi"
          >
            Ok, entendi
          </button>
        </div>
      )}
    </>
  );
};
