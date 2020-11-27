import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();

  return (
    <div className="formulario-cobranca">
      <form onSubmit={handleSubmit(() => {})}>
        <label>
          <span>Cliente</span>
          <select placeholder="Selecione o cliente" name="cliente" id="cliente">
            <option value="joaozin 2 pelota">João</option>
          </select>
        </label>
        <label>
          <span>Descrição</span>
          <input />
          <span>A descrição informada será impressa no boleto</span>
        </label>
        <div className="inputs">
          <label>
            <span>Valor</span>
            <input placeholder="R$ 0,00" inputMode="numeric" />
          </label>
          <label>
            <span>Vencimento</span>
            <input type="date" />
          </label>
        </div>
        <div className="form-botoes">
          <button>Cancelar</button>
          <button>Criar cobrança</button>
        </div>
      </form>
    </div>
  );
};
