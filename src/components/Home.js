import { Outlet, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          {/* <img/> */}
          Logo
        </div>
        <div className="nav-button" onClick={() => {}}>Ürün Değerlendir</div>
        <div className="nav-button" onClick={() => navigate("profile")}>Profil</div>
        <div className="nav-button" onClick={() => navigate("messages")}>Mesaj</div>
        <div className="nav-button" onClick={() => navigate("settings")}>Ayarlar</div>
        <></>
      </div>
      <div className="var-page">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Home;
