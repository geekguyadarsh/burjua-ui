import React from "react";
import Logo from "../../assets/Logo@2x.png";
import CartIcon from "../../assets/Cart.svg";
import CartIconWhite from "../../assets/cart-white.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import searchIcon from "../../assets/Search.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md px-0">
      <Link
        to="/"
        className="nav-link ml-2 navbar-brand text-white"
        style={{ fontFamily: "FortuneCookieNF" }}
      >
        <img className="brandlogo" src={Logo} alt="logo" height="60px"></img>
        BURJUA
      </Link>
      <img
        src={searchIcon}
        alt="search"
        className="d-block d-md-none ml-auto mr-3"
      />
      <img src={CartIconWhite} alt="cart" className="d-block d-md-none mr-2" />
      <form action="search" className="d-md-block d-none">
        <img src={searchIcon} alt="search" className="mr-2" />
        <input
          type="text"
          className="searchbar text-white .d-none .d-md-block .d-lg-block"
          placeholder="Search products"
          style={{ caretColor: "white" }}
        />
      </form>
      <button
        class="navbar-toggler d-flex d-md-none flex-column align-items-end"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div
          style={{
            width: "20px",
            height: "2px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            borderRadius: "1px",
          }}
        ></div>
        <div
          style={{
            width: "12px",
            height: "2px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            borderRadius: "1px",
          }}
          className="my-2"
        ></div>
        <div
          style={{
            width: "20px",
            height: "2px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            borderRadius: "1px",
          }}
        ></div>
      </button>
      <div
        className="collapse navbar-collapse pl-2"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav nav-right ml-auto mr-2">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="#!">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-white faded-text" to="#!">
              Categories
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-white faded-text" to="#!">
              Who we are?
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-white faded-text" to="#!">
              Login
            </Link>
          </li>
          <li className="nav-item active d-md-block d-none">
            <Link className="nav-link text-white faded-text" to="#!">
              <img src={CartIcon} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
