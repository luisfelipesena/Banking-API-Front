import { useForm } from "react-hook-form";
import { addCliente } from "./addCliente";
import React from "react";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();

  const token = localStorage.getItem("token");

  const nome = watch("nome");
  const email = watch("email");
  const cpf = watch("cpf");
  const telefone = watch("telefone");

  return (
    <div className="formulario-cobranca">
      <form
        onSubmit={handleSubmit(async (dados) => {
          if (
            dados.nome &&
            dados.email &&
            dados.cpf &&
            dados.telefone &&
            dados.telefone.length === 14
          ) {
            const request = await addCliente(
              token,
              dados.nome,
              dados.cpf,
              dados.email,
              dados.telefone
            );
            if (request) {
              alert("Cliente Criado Com Sucesso !!");
              return (window.location.href = "/home");
            } else if (request === null) {
              return alert("CPF inválido");
            }
          }
          alert("Cliente não foi adicionado");
        })}
      >
        <label>
          <span>Nome</span>
          <input ref={register} name="nome" className="descricao-input" />
        </label>
        <label>
          <span>Email</span>
          <input
            ref={register}
            name="email"
            type="email"
            className="descricao-input"
          />
        </label>
        <div className="inputs">
          <label>
            <span>CPF</span>
            <input
              ref={register}
              name="cpf"
              className="cpf"
              placeholder="55555555555"
              inputMode="numeric"
            />
          </label>
          <label>
            <span>Telefone</span>
            <input
              ref={register}
              name="telefone"
              className="tel"
              inputMode="numeric"
              placeholder="+99(99)999999999"
            />
          </label>
        </div>
        <div className="form-botoes">
          <button
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            Cancelar
          </button>
          <button
            disabled={!nome || !email || !cpf || !telefone}
            className={nome && email && cpf && telefone ? "completo" : ""}
          >
            Adicionar Cliente
          </button>
        </div>
      </form>
    </div>
  );
};
