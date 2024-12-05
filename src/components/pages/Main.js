import "./Main.css";
import Rewievs from "../Rewievs";
import { useState } from "react";
import yorumpp from "../images/yorumpp.jpg";
import Modal from "../Modal";

function Main() {
  // ratings, initial değerleri Rewievs'ten çekiyor
  const [ratings, setRatings] = useState(Rewievs.map((item) => item.rating));
  const [hoveredRatings, setHoveredRatings] = useState(Rewievs.map(() => null)); // Her yorum için hover durumu
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState();

  const handleRating = (itemIndex, newRating) => {
    const updatedRatings = [...ratings];
    updatedRatings[itemIndex] = newRating;
    setRatings(updatedRatings);

    // `Rewievs` listesindeki rating değerini doğrudan güncelle
    Rewievs[itemIndex].rating = newRating;
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
        {Rewievs.map((item, index) => (
          <div
            key={item.id}
            className="reviews"
            onClick={() => handleReview(index, item)}
          >
            <img src={item.foto} alt="Product Photo" />
            <div className="reviews-mid">
              <div className="reviews-exp">
                <div className="reviews-exp-inside">{item.aciklama}</div>
              </div>
              <div className="reviews-rating">
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
              </div>
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
      {/* <div className="main-right"></div> */}
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
                  <img src={yorumpp}></img>
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
