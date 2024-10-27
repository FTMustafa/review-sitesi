import "./Main.css";
import Rewievs from "../Rewievs";
import { useState } from "react";

function Main() {
  const [ratings, setRatings] = useState(Rewievs.map((item) => item.rating));

  const handleRating = (itemIndex, newRating) => {
    const updatedRatings = [...ratings];
    updatedRatings[itemIndex] = newRating;
    setRatings(updatedRatings);
  };

  return (
    <div className="main">
      <div className="main-left">
        {Rewievs.map((item, index) => (
          <div key={item.id} className="reviews">
            <img src={item.foto} alt="Product Photo" />
            <div className="reviews-mid">
              <div className="reviews-exp">
                <div className="reviews-exp-inside">{item.aciklama}</div>
              </div>
              <div className="reviews-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= ratings[index] ? "filled" : ""}`}
                    onClick={() => handleRating(index, star)}
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
                    <img src={yorum.k_foto} alt="User Photo" />
                    <p>{yorum.k_yorum}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="main-right"></div>
    </div>
  );
}

export default Main;
