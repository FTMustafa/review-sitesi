import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
    const navigate = useNavigate()
  return (
    <div className="signin">
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <label>E-mail</label>
          <input type="text" placeholder="E-mail" />
          <label>Password</label>
          <input type="text" placeholder="Password" />
          <div className="button-side">
            <button type="submit">Sign in</button>
            <button onClick={() => navigate("/login")}>Go back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
