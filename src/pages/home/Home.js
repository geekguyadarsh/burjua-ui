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

const Home = () => {
  return (
    <div className="home">
      <Base homepage="true">
        <Slider />
        <div className="container my-4">
          <OfferCard />
        </div>
        <div className="container my-4">
          <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline">
            <div className="col-12 col-md-4 pretty-text-left">
              <PrettyHeader title="Selected just for you" />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary d-md-block d-none show-btn"
              >
                SHOW MORE
              </button>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                discount="30%"
                imageUrl={product}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                imageUrl={product1}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                discount="60%"
                imageUrl={product2}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                imageUrl={product3}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
          </div>
        </div>
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
        <div className="container my-4">
          <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline">
            <div className="col-12 col-md-4 pretty-text-left">
              <PrettyHeader title="Selected just for you" />
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary d-md-block d-none show-btn"
              >
                SHOW MORE
              </button>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                imageUrl={product}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                imageUrl={product1}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                imageUrl={product2}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-6 col-sm-6 col-md-3 ">
              <ProductCard
                imageUrl={product3}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};
export default Home;
