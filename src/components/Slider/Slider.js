import React from "react";
import "./Slider.css";
import sliderImg from "../../assets/sliderImg.png";
import btnArrow from "../../assets/btnArrow.svg";

const Slider = () => {
  return (
    <div id="slider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" className="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={sliderImg} alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h4>Hand Crafted Shoes that suit your personality</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={sliderImg} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h4>Hand Crafted Shoes that suit your personality</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={sliderImg} alt="Third slide" />
          <div class="carousel-caption d-none d-md-block align-text-left">
            <h4>Hand Crafted Shoes that suit your personality</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
