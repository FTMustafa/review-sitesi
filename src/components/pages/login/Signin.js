import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Signin.css";
import Users from "../../Users";
import { use } from "react";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    Users.forEach((user)=>(
        user.email === email && user.password === password ? 
          user.isActive = true && navigate('/') : console.log('Girişte hata!!!!!')
      )
    );
   
  };

  return (
    <div className="signin">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <label>E-mail</label>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-side">
            <button type="submit">Sign in</button>
            <button type="button" onClick={() => navigate("/login")}>
              Go back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
