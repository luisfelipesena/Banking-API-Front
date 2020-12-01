import { Header } from "../home/header";
import { Content } from "./content";

export const ClientesComponent = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="conteudo">
          <Header />
          <Content />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
