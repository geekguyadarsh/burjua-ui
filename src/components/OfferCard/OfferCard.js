import React from "react";
import "./OfferCard.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";

const OfferCard = ({ imageUrl, title, ctaText }) => {
  const card = () => {
    return (
      <div className="conatiner">
        <div className="flex-box">
          <div className="flex-3-column">
            <img src={img1} alt="img1" className="column_1_image" />
            <h1 className="text">
              New arrivals <br /> are now in!
            </h1>
            <button className="showCollection">Show Collection</button>
          </div>

          <div className="flex-3-column">
            <img src={img2} alt="img2" className="column_2_image" />
            <h1 className="text2">
              Loafers starting at <br /> Rs 2999
            </h1>
            <button className="btn">MORE DETAILS</button>
          </div>

          <div className="flex-3-column">
            <img src={img3} alt="img3" className="column_3_image" />
            <h1 className="text3">
              Sale this <br /> Summer
            </h1>
            <button className="btn2">VIEW ALL</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="offer-card">
      <div className="container-fluid mx-4">
        <div className="row d-flex justify-content-around flex-wrap">
          <div className="col-md-6">
            <div className="">
              <img
                src={img1}
                alt="img1"
                className=""
                width="100%"
                height="auto"
              />
              <h1 className="text">
                New arrivals <br /> are now in!
              </h1>
              <button className="showCollection">Show Collection</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <img
                src={img2}
                alt="img2"
                className=""
                width="100%"
                height="auto"
              />
              <h1 className="">
                Loafers starting at <br /> Rs 2999
              </h1>
              <button className="btn">MORE DETAILS</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <img
                src={img3}
                alt="img3"
                className=""
                width="100%"
                height="auto"
              />
              <h1 className="text3">
                Sale this <br /> Summer
              </h1>
              <button className="btn2">VIEW ALL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferCard;
