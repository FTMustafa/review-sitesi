import { useState } from "react";
import Users from "../Users";
import "./AdminPanel.css";
import yorumpp from '../images/yorumpp.jpg'

function AdminPanel() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Burada navigasyon veya başka bir işlem ekleyebilirsiniz
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-left">
        <input className="search-bar" placeholder="kullanıcı arayın.." />
        <div className="users">
          {Users.map((user) => (
            <div
              className={`user-view ${
                selectedUser?.id === user.id ? "active" : ""
              }`}
              key={user.id}
              onClick={() => handleUserClick(user)}
            >
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Surname: {user.surname}</p>
              <p>Role: {user.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="admin-panel-right">
        {selectedUser ? (
          <div className="user-details">
            <h2>{selectedUser.name} {selectedUser.surname}</h2>
            <p>Role: {selectedUser.role}</p>
            <p>ID: {selectedUser.id}</p>
            {selectedUser.reviews.map((item, index) => (
          <div key={item.id} className="reviews">
            <img src={item.foto} alt="Product Photo" />
            <div className="reviews-mid">
              <div className="reviews-exp">
                <div className="ap-reviews-exp-inside">{item.aciklama}</div>
              </div>
              {/* <div className="reviews-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                  key={star}
                  className={`star ${
                    star <= (hoveredRatings[index] ?? ratings[index])
                      ? star <= ratings[index]
                        ? "filled"
                        : "blink"
                      : ""
                  }`}
                  onClick={() => handleRating(index, star)}
                  onMouseEnter={() => handleHover(index, star)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  ★
                </span>
                ))}
              </div> */}
            </div>
            <div className="reviews-right">
              <div className="reviews-right-comment">
                {item.yorumlar.map((yorum) => (
                  <div key={yorum.k_id} className="reviews-comments">
                    {/* yorum.k_foto */}
                    <img src={yorumpp} alt="User Photo" />
                    <p>{yorum.k_yorum}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
          </div>
        ) : (
          <h1>NULL</h1>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
