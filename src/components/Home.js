import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const handleNavigate = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  return (
    <div className="home">
      <div className="navbar">
        <div className={`logo ${activeButton === "/" ? "active" : ""}`} onClick={() => handleNavigate("/")}>
          {/* <img/> */}
          Logo
        </div>
        <div
          className='nav-button'
          onClick={() => {}}
        >
          Ürün Değerlendir
        </div>
        <div
          className={`nav-button ${activeButton === "profile" ? "active" : ""}`}
          onClick={() => handleNavigate("profile")}
        >
          Profil
        </div>
        <div
          className={`nav-button ${activeButton === "messages" ? "active" : ""}`}
          onClick={() => handleNavigate("messages")}
        >
          Mesaj
        </div>
        <div
          className={`nav-button ${activeButton === "settings" ? "active" : ""}`}
          onClick={() => handleNavigate("settings")}
        >
          Ayarlar
        </div>
      </div>
      <div className="var-page">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Home;
