import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
  return (
    <div className="login">
      <div className="container">
        <form>
          <h1>Log in</h1>
          <label>E-mail</label>
          <input type="text" placeholder="E-mail" />
          <label>Password</label>
          <input type="text" placeholder="Password" />
          <div className="button-side">
            <button type="submit">Log in</button>
            <button onClick={()=> navigate('/signin')}>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
