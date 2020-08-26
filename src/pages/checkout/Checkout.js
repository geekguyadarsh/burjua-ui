import React from "react";
import Base from "../../components/Base/Base";
import "./Checkout.css";
import btnArrowLeft from "../../assets/btnArrowLeft.svg";
import ProductInCheckout from "../../components/ProductInCheckout/ProductInCheckout";

const Checkout = () => {
  return (
    <div id="checkout">
      <Base>
        <div className="container mt-5">
          <div className="row justify-content-between">
            {/* Shipping Address Form */}

            <div className="col-12 col-md-4 my-1">
              <div className="page-title">Shipping Details</div>

              <form className="my-2">
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      placeholder="Pincode | ZIP code"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      type="number"
                      className="form-control"
                      id="inputNumber"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </form>
              <div className="go-back d-md-none d-block my-3 ml-1">
                <div
                  type="button"
                  className="d-flex"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <img src={btnArrowLeft} alt="" />
                  <div className="ml-3">Go Back</div>
                </div>
              </div>
            </div>

            {/* Payment Options */}

            <div className="col-12 col-md-3 my-1">
              <div className="page-title">Payment Options</div>
              <div className="row"></div>
            </div>

            {/* Cart Section */}

            <div className="col-12 col-md-4 my-1">
              <div className="page-title">Your cart</div>
              <ProductInCheckout />
              <ProductInCheckout />
              <ProductInCheckout />
            </div>
          </div>

          {/* Action Buttons */}

          <div className="actions d-flex align-items-center justify-content-between mt-3">
            <div className="go-back d-none d-md-block">
              <div
                type="button"
                className="d-flex"
                style={{
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                <img src={btnArrowLeft} alt="" />
                <div className="ml-3">Go Back</div>
              </div>
            </div>
            <div className="btns-right d-flex">
              <button
                className="btn mr-3"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                CONTINUE SHOPPING
              </button>
              <div className="checkout-btn ml-1">
                <button className="btn btn-pay p-2 py-1 px-3">
                  PROCEED TO PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Checkout;
