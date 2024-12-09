import "./Profile.css";
import { useEffect, useState } from "react";
import image1 from "../images/a.jpg";
import Users from "../Users";
import ReviewCard from "../ReviewCard";
import Modal from "../Modal";
import yorumpp from "../images/yorumpp.jpg";

function Profile() {
  const [activeUser, setActiveUser] = useState(
    Users.find((user) => user.isActive === true)
  );

  const [ratings, setRatings] = useState([]);
  const [hoveredRatings, setHoveredRatings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState();

  useEffect(() => {
    const user = Users.find((user) => user.isActive === true);
    setActiveUser(user);

    if (user) {
      // Kullanıcı bulunduğunda değerlendirme verilerini hazırla
      setRatings(user.reviews.map((item) => item.rating || 0));
      setHoveredRatings(user.reviews.map(() => null));
    }
  }, []);

  const handleReview = (index, item) => {
    setIsModalOpen(true);
    setSelectedReview(item);
  };

  const handleHover = (itemIndex, star) => {
    const updatedHoveredRatings = [...hoveredRatings];
    updatedHoveredRatings[itemIndex] = star;
    setHoveredRatings(updatedHoveredRatings);
  };

  const handleRating = (itemIndex, newRating) => {
    if (!activeUser) return; // Kullanıcı yoksa hiçbir işlem yapma
    const updatedRatings = [...ratings];
    updatedRatings[itemIndex] = newRating;
    setRatings(updatedRatings);

    // Kalıcı güncelleme
    const updatedUser = { ...activeUser };
    updatedUser.reviews[itemIndex].rating = newRating;
    setActiveUser(updatedUser);
  };

  const handleMouseLeave = (itemIndex) => {
    const updatedHoveredRatings = [...hoveredRatings];
    updatedHoveredRatings[itemIndex] = null;
    setHoveredRatings(updatedHoveredRatings);
  };

  return (
    <div className="profile">
      {activeUser ? (
        <>
          <div className="profile-bg-pic" alt="Background">
            <img
              className="profile-pp"
              src={activeUser.profilePicture}
              alt="Profile"
            />
          </div>
          <div className="profile-down-side">
            <div className="info">
              <p>BİLGİLER</p>
              <p>{activeUser.name}</p>
            </div>
            <div className="user-reviews">
              <p>KULLANICI DEĞERLENDİRMELERİ</p>
              {activeUser.reviews.map((item, index) => (
                <ReviewCard
                  key={item.id}
                  item={item}
                  index={index}
                  hoveredRating={hoveredRatings[index]}
                  rating={ratings[index]}
                  handleReview={handleReview}
                  handleRating={handleRating}
                  handleHover={handleHover}
                  handleMouseLeave={handleMouseLeave}
                />
              ))}

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="r-modal">
                  <div className="r-modal-top">
                    <div className="r-modal-top-left">
                      <img
                        className="r-image"
                        src={selectedReview?.foto}
                        alt="Selected Review"
                      />
                    </div>
                    <div className="r-modal-top-right">
                      <div className="r-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`star ${
                              star <= selectedReview?.rating ? "filled" : ""
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="r-exp">{selectedReview?.aciklama}</div>
                    </div>
                  </div>
                  <div className="r-modal-bottom">
                    <div id="cmmnt">YORUMLAR</div>
                    {selectedReview?.yorumlar.map((yorum) => (
                      <div className="r-comments" key={yorum.k_id}>
                        <div className="r-comment">
                          <img src={yorumpp} alt="User Comment" />
                          {yorum.k_yorum}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </>
      ) : (
        <div id="guest">Ziyaretçi modunda profil erişimi yoktur.</div>
      )}
    </div>
  );
}

export default Profile;
