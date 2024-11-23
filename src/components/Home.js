import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");
  const [userMode, setUserMode] = useState("admin");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  return (
    <div className="home">
      <div className="navbar">
        <div
          className={`logo ${activeButton === "/" ? "active" : ""}`}
          onClick={() => handleNavigate("/")}
        >
          {/* <img/> */}
          Logo
        </div>
        <input
          className="search"
          type="text"
          placeholder="Değerlendirme arayın.."
        />
        <div
          className="nav-button"
          onClick={() => setIsModalOpen(true)}
        >
          Ürün Ekle
        </div>
        <div
          className={`nav-button ${activeButton === "profile" ? "active" : ""}`}
          onClick={() => handleNavigate("profile")}
        >
          Profil
        </div>
        <div
          className={`nav-button ${
            activeButton === "messages" ? "active" : ""
          }`}
          onClick={() => handleNavigate("messages")}
        >
          Mesaj
        </div>
        <div
          className={`nav-button ${
            activeButton === "settings" ? "active" : ""
          }`}
          onClick={() => handleNavigate("settings")}
        >
          Ayarlar
        </div>
        {userMode === "admin" ? (
          <div
            className={`nav-button ${
              activeButton === "admin-panel" ? "active" : ""
            }`}
            onClick={() => handleNavigate("admin-panel")}
          >
            Admin Panel
          </div>
        ) : (
          <></>
        )}
        <div
          style={{ marginTop: "0" }}
          className={`nav-button ${activeButton === "logout" ? "active" : ""}`}
          onClick={() => {
            userMode === "guest"
              ? handleNavigate("login")
              : userMode === "user" || userMode === "admin"
              ? setUserMode("guest")
              : console.log("GİRİŞ HATASI");
          }}
        >
          {userMode === "guest" ? (
            <>Giriş yap</>
          ) : userMode === "user" || userMode === "admin" ? (
            <>Çıkış yap</>
          ) : (
            <>HATA</>
          )}
        </div>
        
      </div>
      <div className="var-page">
        <Outlet></Outlet>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Ürün Değerlendir</h2>
        <p>Ürün değerlendirme formunu buraya ekleyebilirsiniz.</p>
      </Modal>
    </div>
  );
}

export default Home;
