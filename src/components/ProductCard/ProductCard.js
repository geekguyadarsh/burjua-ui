import React from "react";

const ProductCard = ({ imageUrl, category, title, price }) => {
  return (
    <div className="productCard mt-4">
      <a href="#!" className="btn">
        <div class="card" style={{ border: "none" }}>
          <img src={imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text mb-1">
              <small class="text-muted">{category}</small>
            </p>
            <h6 class="card-title mb-1" style={{ color: "#384355" }}>
              {title}
            </h6>
            <h6 class="card-price mb-1">₹ {price}</h6>
          </div>
        </div>
      </a>
    </div>
  );
};
export default ProductCard;
