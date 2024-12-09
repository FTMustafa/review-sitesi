import React from "react";
import "./ReviewCard.css";
import yorumpp from "./images/yorumpp.jpg";

const ReviewCard = ({
  item,
  index,
  hoveredRating,
  rating,
  handleReview,
  handleRating,
  handleHover,
  handleMouseLeave,
}) => {
  return (
    <div
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
                star <= (hoveredRating ?? rating)
                  ? star <= rating
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
              <img src={yorumpp} alt="User Photo" />
              <p>{yorum.k_yorum}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
