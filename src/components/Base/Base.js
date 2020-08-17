import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Base = ({ homepage, className, children }) => {
  return (
    <div className="base">
      <NavBar homepage={homepage} />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};
export default Base;
