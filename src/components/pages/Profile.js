import "./Profile.css";
import Rewievs from "../Rewievs";
import { useState } from "react";
import image1 from '../images/a.jpg'; 

function Profile() {
  const [activeUserID, setActiveUserID] = useState(1);

  // Aktif kullanıcıyı seçiyoruz
  const activeUser = Rewievs.find((user) => user.id === activeUserID);

  return (
    <div className="profile">
      {activeUser ? (
        <>
          <div
            className="profile-bg-pic"
            // activeUser.bgFoto
            alt="Background"
          >
            {/* activeUser.foto */}
            <img className="profile-pp" src={image1} alt="Profile" />
          </div>

          <div className="profile-down-side">
            <div className="profile-down-left-side">
              <div className="info">
                <p>{activeUser.name}BİLGİLER</p>
                <p>{activeUser.bio}</p>
              </div>
              <div className="statistics">
                <p>iSTATİSTİKLER{activeUser.followers}</p>
                <p>{activeUser.posts}</p>
              </div>
            </div>
            <div className="profile-down-right-side">
              KULLANICI DEĞERLENDİRMELERİ
            </div>
          </div>
        </>
      ) : (
        <div>HATA: Kullanıcı bulunamadı.</div>
      )}
    </div>
  );
}

export default Profile;
