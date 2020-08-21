import React from "react";
import product from "../../assets/Product.png";
const CartProduct = ({ imgUrl, name, color, size, price }) => {
  return (
    <div>
      <div className="row d-flex mt-4 cart-item align-items-center">
        <div className="col-1">
          <img src={product} alt="product" height="72px" width="72px" />
        </div>
        <div className="col-3">
          <div className="cart-item-name">Bally Black Lione Lantel</div>
          <div className="cart-item-category">LOAFERS</div>
        </div>
        <div className="col-2 cart-item-color">White</div>
        <div className="col-1 cart-item-size">XL</div>
        <div className="col-2 cart-item-price">Amount</div>
        <div className="col-2 cart-item-price">₹ 2000</div>
        <div className="col- cart-item-btn">
          <button className="btn delete-btn">DELETE</button>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
