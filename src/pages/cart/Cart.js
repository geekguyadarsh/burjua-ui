import React from "react";
import Base from "../../components/Base/Base";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import btnArrowLeft from "../../assets/btnArrowLeft.svg";

const Cart = () => {
  return (
    <div id="Cart">
      <Base>
        <div className="container mt-5">
          <div className="page-title">Shopping Cart</div>
          <div className="container-fluid p-0 mt-2">
            <div className="row d-flex mt-4 cart-headers">
              <div className="col-1">Product</div>
              <div className="col-3">Product Name and Category</div>
              <div className="col-2">Color</div>
              <div className="col-1">Size</div>
              <div className="col-2">Amount</div>
              <div className="col-1">Price</div>
              <div className="col-2"></div>
            </div>
            <CartProduct />
            <CartProduct />
            <CartProduct />

            <div className="cart-actions mt-5">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-6 d-flex justify-content-between align-items-center">
                  <div className="go-back">
                    <div
                      type="button"
                      className="d-flex"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      <img src={btnArrowLeft} alt="" />
                      <div className="ml-3">Continue shopping</div>
                    </div>
                  </div>
                  <div className="promo d-flex align-items-center">
                    <input
                      className="input-box"
                      type="text"
                      placeholder="Promo Code"
                    />
                    <div
                      className="apply-btn"
                      type="button"
                      style={{
                        color: "#384355",
                        fontWeight: "500",
                        fontSize: "12px",
                        float: "right",
                        marginRight: "9px",
                        position: "absolute",
                        right: "15px",
                      }}
                    >
                      Apply
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-between align-items-center">
                  <div
                    className="cart-total"
                    style={{
                      fontWeight: "300",
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    Total cost
                    <span
                      className="ml-2"
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#000000",
                      }}
                    >
                      ₹ 4600
                    </span>
                  </div>
                  <div>
                    <div className="ask-email">
                      <input
                        className="input-box"
                        type="email"
                        size="30"
                        placeholder="Enter your email to checkout"
                      />
                    </div>
                  </div>
                  <div className="checkout-btn">
                    <button className="btn btn-checkout p-2 px-3">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};
export default Cart;
