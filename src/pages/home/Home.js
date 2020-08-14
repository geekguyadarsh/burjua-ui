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
      <Base>
        <Slider />
        <div className="container mt-4">
          <div className="row d-flex justify-content-between">
            <div className="col-4">
              <PrettyHeader title="Selected just for you" />
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                SHOW MORE
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ProductCard
                imageUrl={product}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-3">
              <ProductCard
                imageUrl={product1}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-3">
              <ProductCard
                imageUrl={product2}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-3">
              <ProductCard
                imageUrl={product3}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
          </div>
        </div>
        <div className="container my-3">
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <PrettyHeader
                title="How are we different"
                subtext="Our mission is to offer high-quality Made in India products without having you spend a fortune. How do we do it? We only sell directly to you, no middlemen involved."
              />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row d-flex justify-content-between">
            <div className="col-4">
              <PrettyHeader title="Selected just for you" />
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                SHOW MORE
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ProductCard
                imageUrl={product}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-3">
              <ProductCard
                imageUrl={product1}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-3">
              <ProductCard
                imageUrl={product2}
                category="loafers"
                title="Bally black lione lantel"
                price="2000"
              />
            </div>
            <div className="col-3">
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
