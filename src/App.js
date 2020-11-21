import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/login-cadastro/login/index";
import { Cadastro } from "./pages/login-cadastro/cadastro/index";
import { EsqueciSenha } from "./pages/login-cadastro/senha/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/esqueci-senha" component={EsqueciSenha} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
