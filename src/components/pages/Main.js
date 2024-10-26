import "./Main.css";
import Rewievs from "../Rewievs";

function Main() {
  return (
    <div className="main">
      <div className="main-left">
        {Rewievs.map((item) => (
          <div key={item.id} className="reviews">
            <img src={item.foto} />
            <div className="reviews-mid">
              <div className="reviews-exp">{item.aciklama}</div>
              <div className="reviews-rating">{item.rating}</div>
            </div>
            <div className="reviews-right">
              <div className="reviews-right-comment">
              {item.yorumlar.map((yorum) => (
                    <div key={yorum.k_id} className="reviews-comments">
                      <img/>
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
