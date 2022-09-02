import InputText from "../Components/InputText";
import "./Login.css";

function Login() {
  return (
    <div className="boxLogin">
      <div className="form-content">
        <h2 className="active">Login</h2>
        <div className="logo">
          <h3>GoDev Shop Login</h3>
        </div>
        <form>
          <InputText txt={"Login"} />
          <InputText txt={"Senha"} />
          <input type="submit" className="button" value="Logar" />
        </form>
        <div className="form-footer">
          <a className="underlineHover" href="/">
            Esqueceu sua senha ?
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
