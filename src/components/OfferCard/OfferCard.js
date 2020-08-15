import React from "react";
import "./OfferCard.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import ProductCard from "../ProductCard/ProductCard";

const OfferCard = ({ imageUrl, title, ctaText }) => {
  return (
    <div
      id="offer-card"
      className="row my-3 d-none d-md-flex justify-content-around m-0 mt-2 "
    >
      <div
        className="col-6 col-sm-6 col-md-5 d-flex align-items-end"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          opacity: "0.8",
        }}
      >
        <div
          className="card mt-1"
          style={{ background: "transparent", border: "none" }}
        >
          <div className="card-body mb-4 p-1">
            <p
              className="card-text my-1 card-category"
              style={{
                textAlign: "left",
                fontFamily: "Playfair Display",
                fontSize: "24px",
                letterSpacing: "0px",
                color: "white",
                zIndex: "30",
                opacity: "1",
              }}
            >
              New arrivals are now in!
            </p>
            <button
              type="button"
              className="card-title my-1 card-title btn btn-sm btn-outline-secondary p-2 mt-2"
              style={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontSize: "13px",
                letterSpacing: "0px",
                color: "#000000",
                textTransform: "uppercase",
                opacity: "1",
              }}
            >
              <small>Show collection</small>
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-sm-6 col-md-3 d-flex align-items-end"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          opacity: "0.8",
        }}
      >
        <div
          className="card mt-1"
          style={{ background: "transparent", border: "none" }}
        >
          <div className="card-body mb-4 p-1">
            <p
              className="card-text my-1 card-category"
              style={{
                textAlign: "left",
                fontFamily: "Playfair Display",
                fontSize: "24px",
                letterSpacing: "0px",
                color: "white",
                zIndex: "30",
                opacity: "1",
              }}
            >
              Loafers starting at ₹ 2999
            </p>
            <button
              type="button"
              className="card-title my-1 card-title btn btn-sm btn-outline-secondary p-2 mt-2"
              style={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontSize: "13px",
                letterSpacing: "0px",
                color: "#000000",
                textTransform: "uppercase",
                opacity: "1",
              }}
            >
              <small>More details</small>
            </button>
          </div>
        </div>
      </div>
      <div
        className="col-6 col-sm-6 col-md-3 d-flex align-items-end"
        style={{
          backgroundImage: `url(${img3})`,
          width: "221px",
          height: "275px",
          backgroundSize: "cover",
          opacity: "0.8",
        }}
      >
        <div
          className="card mt-1"
          style={{ background: "transparent", border: "none" }}
        >
          <div className="card-body mb-4 p-1">
            <p
              className="card-text my-1 card-category"
              style={{
                textAlign: "left",
                fontFamily: "Playfair Display",
                fontSize: "24px",
                letterSpacing: "0px",
                color: "white",
                zIndex: "30",
                opacity: "1",
              }}
            >
              Sale this summer
            </p>
            <button
              type="button"
              className="card-title my-1 card-title btn btn-sm btn-outline-secondary p-2 mt-2 px-2"
              style={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontSize: "13px",
                letterSpacing: "0px",
                color: "#000000",
                textTransform: "uppercase",
                opacity: "1",
              }}
            >
              <small>VIEW ALL</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferCard;
