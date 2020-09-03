import React from "react";
import Base from "../../components/Base/Base";
import OfferCard from "../../components/OfferCard/OfferCard";
import Slider from "../../components/Slider/Slider";
import PrettyHeader from "../../components/PrettyHeader/PrettyHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import product from "../../assets/Product.png";
import product1 from "../../assets/Product1.png";
import product2 from "../../assets/Product2.png";
import product3 from "../../assets/Product3.png";
import ProductShowcaseSection from "../../components/ProductShowcaseSection/ProductShowcaseSection";

const Home = () => {
  return (
    <div className="home">
      <Base homepage="true">
        {/* Product Carousel Section */}

        <Slider />

        {/* Offer Card Section */}

        <div className="container my-4">
          <OfferCard />
        </div>

        {/* Suggested Product Section */}

        <ProductShowcaseSection showcaseTitle="Suggested For You" />

        {/* How are we different Section */}

        <div className="container my-4">
          <div className="row my-3 d-flex justify-content-center">
            <div className="col-10 col-md-5">
              <PrettyHeader
                title="How are we different"
                subtext="Our mission is to offer high-quality Made in India products without having you spend a fortune. How do we do it? We only sell directly to you, no middlemen involved."
              />
            </div>
          </div>
        </div>

        {/* Popular Picks Section */}

        <ProductShowcaseSection showcaseTitle="Popular Picks" />
      </Base>
    </div>
  );
};
export default Home;
