import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/login-cadastro/login";
import { Cadastro } from "./pages/login-cadastro/cadastro";
import { EsqueciSenha } from "./pages/login-cadastro/esqueci-senha";
import { Home } from "./pages/main/home";
import { Cobrancas } from "./pages/main/cobrancas/pageCobrancas";
import { CobrancasCriar } from "./pages/main/cobrancas/criarCobranca";
import { Clientes } from "./pages/main/clientes/clientes";
import { TrocarSenha } from "./pages/login-cadastro/trocar-senha";
import { PageAdicionarCliente } from "./pages/main/clientes/adicionar-clientes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/esqueci-senha" component={EsqueciSenha} />
        <Route exact path="/trocar-senha" component={TrocarSenha} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cobrancas" component={Cobrancas} />
        <Route exact path="/criar-cobranca" component={CobrancasCriar} />
        <Route exact path="/clientes" component={Clientes} />
        <Route
          exact
          path="/adicionar-cliente"
          component={PageAdicionarCliente}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
