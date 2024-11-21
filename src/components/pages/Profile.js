import "./Profile.css";
import Rewievs from "../Rewievs";
import { useState } from "react";

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
            src={activeUser.bgFoto}
            alt="Background"
          >
            <img className="profile-pp" src={activeUser.foto} alt="Profile" />
          </div>

          <div className="profile-down-side">
            <div className="profile-down-left-side">
              <div className="info">
                <p>Name: {activeUser.name}Moustafa</p>
                <p>Surname: {activeUser.bio}Moustafa</p>
              </div>
              <div className="statistics">
                <p>Followers: {activeUser.followers}</p>
                <p>Posts: {activeUser.posts}</p>
              </div>
            </div>
            <div className="profile-down-right-side"></div>
          </div>
        </>
      ) : (
        <div>HATA: Kullanıcı bulunamadı.</div>
      )}
    </div>
  );
}

export default Profile;
