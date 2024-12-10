import "./Login.css";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import Users from "../../Users";
import { use } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    const user = Users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      user.isActive = true;
      navigate('/');
    } else {
      alert('HATA! Giriş bilgileri yanlış.');
    }
  };
  
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={() => handleSubmit()}>
          <h1>Log in</h1>
          <label>E-mail</label>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-side">
            <button type="submit">Log in</button>
            <button onClick={() => navigate("/signin")}>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
