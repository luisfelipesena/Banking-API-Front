import { useForm } from "react-hook-form";
import React from "react";
import { useLogin } from "./login";
import { Link } from "react-router-dom";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const { login } = useLogin();

  const [erro, setErro] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);

  const email = watch("email");
  const senha = watch("senha");

  return (
    <form
      name="form"
      onSubmit={handleSubmit(async (dados) => {
        if (dados.senha && dados.email) {
          setCarregando(true);
          const r = await login(dados.email, dados.senha);
          setCarregando(false);
          r ? (window.location.href = "/home") : setErro(true);
        }
      })}
    >
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
      <label className="senha">
        <span>Senha</span>
        <input
          className={
            senha != null && senha && !erro
              ? "senhaAtiva"
              : !erro || carregando
              ? ""
              : "erro"
          }
          ref={register}
          name="senha"
          type="password"
          placeholder="minhasenha"
        />
      </label>
      <label className="esqueci">
        <Link to="esqueci-senha" className="link">
          Esqueci minha senha
        </Link>
      </label>
      {!carregando ? (
        <button
          disabled={!email && !senha}
          className={email && senha ? "botaoAtivo" : ""}
        >
          Entrar
        </button>
      ) : (
        <div className="carregando">
          Carregando
          <img
            alt="gif carregando"
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          />
        </div>
      )}
    </form>
  );
};
