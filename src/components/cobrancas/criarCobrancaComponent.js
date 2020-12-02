import { Header } from "./header";
import { Form } from "./form";

export const PageCriarCobranca = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="conteudo">
          <Header />
          <Form />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
