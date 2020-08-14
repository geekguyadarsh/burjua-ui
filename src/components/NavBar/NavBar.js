import React from "react";
import Logo from "../../assets/Logo@2x.png";
import CartIcon from "../../assets/Cart.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import searchIcon from "../../assets/Search.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md px-0">
      <Link
        to="/"
        className="nav-link ml-4 navbar-brand text-white"
        style={{ fontFamily: "FortuneCookieNF" }}
      >
        <img className="brandlogo" src={Logo} alt="logo" height="60px"></img>
        BURJUA
      </Link>
      <form action="search">
        <img src={searchIcon} alt="search" className="mr-2" />
        <input
          type="text"
          className="searchbar"
          placeholder="Search products"
        />
      </form>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-right ml-auto mr-5">
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
          <li className="nav-item active">
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
