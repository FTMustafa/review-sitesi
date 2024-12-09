import "./Main.css";
import Users from "../Users";
import { useState } from "react";
import Modal from "../Modal";
import ReviewCard from "../ReviewCard";
import yorumpp from '../images/yorumpp.jpg'; 

function Main() {
 
  const reviews = Users.flatMap((user) => user.reviews);

  
  const [ratings, setRatings] = useState(reviews.map((item) => item.rating));
  const [hoveredRatings, setHoveredRatings] = useState(
    reviews.map(() => null)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState();

  const handleRating = (itemIndex, newRating) => {
    const updatedRatings = [...ratings];
    updatedRatings[itemIndex] = newRating;
    setRatings(updatedRatings);
    reviews[itemIndex].rating = newRating; 
  };

  const handleReview = (index, item) => {
    setIsModalOpen(true);
    setSelectedReview(item);
  };

  const handleHover = (itemIndex, star) => {
    const updatedHoveredRatings = [...hoveredRatings];
    updatedHoveredRatings[itemIndex] = star;
    setHoveredRatings(updatedHoveredRatings);
  };

  const handleMouseLeave = (itemIndex) => {
    const updatedHoveredRatings = [...hoveredRatings];
    updatedHoveredRatings[itemIndex] = null;
    setHoveredRatings(updatedHoveredRatings);
  };

  return (
    <div className="main">
      <div className="main-left">
        {reviews.map((item, index) => (
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
      </div>
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
  );
}

export default Main;
