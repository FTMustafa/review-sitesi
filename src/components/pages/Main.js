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
              <p>{item.aciklama}</p>
              <p>{item.rating}</p>
            </div>
            <div className="reviews-right">
              {item.yorumlar.map((yorum) => (
                    <div key={yorum.k_id} className="reviews-comments">
                      <p>{yorum.k_yorum}</p>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>
      <div className="main-right"></div>
    </div>
  );
}

export default Main;
