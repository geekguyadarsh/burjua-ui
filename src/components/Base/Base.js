import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import CartIcon from "../../assets/Cart.svg";
import "./Base.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Base = ({ className, children }) => {
  return (
    <div className="base">
      <NavBar />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};
export default Base;
