
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="inputCard">
      <div className="inputLabels">
        <label>Email: </label>
        <input type="email"></input>
        <label>Password: </label>
        <input type="password"></input>        
      </div>
      <div className="buttonsInputCard">
        <button>Entrar</button>
        <button>Registro</button>
      </div>
      </div>
    </div>
  );
}
