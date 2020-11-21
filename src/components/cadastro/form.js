import { useForm } from "react-hook-form";
import React from "react";
import { Link } from "react-router-dom";
import { useCadastro } from "./cadastro";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const { cadastro } = useCadastro();

  const [erro, setErro] = React.useState(false);
  const [carregando, setCarregando] = React.useState(false);

  const email = watch("email");
  const senha = watch("senha");
  const nome = watch("nome");

  return (
    <form
      name="form"
      onSubmit={handleSubmit(async (dados) => {
        if (dados.senha && dados.email && dados.nome) {
          setCarregando(true);
          const r = await cadastro(dados.email, dados.senha, dados.nome);
          setCarregando(false);
          r ? (window.location.href = "/") : setErro(true);
        }
      })}
    >
      <label>
        <span>Nome</span>
        <input
          className={
            nome != null && nome && !erro
              ? "nomeAtivo"
              : !erro || carregando
              ? ""
              : "erro"
          }
          ref={register}
          name="nome"
          placeholder="Novo Usuário"
        />
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
      <button
        disabled={!email && !senha && !nome}
        className={email && senha && nome ? "botaoAtivo" : ""}
      >
        Criar Conta
      </button>
    </form>
  );
};
