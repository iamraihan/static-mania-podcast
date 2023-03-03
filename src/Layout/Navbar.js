import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/hero/Logo.svg";
const Navbar = () => {
  return (
    <div className="max-w-[1272px] mx-auto px-3 xl:px-0 flex justify-between py-[23px]">
      <div>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <Link to="#">
        <p className="body-text leading-7">About</p>
      </Link>
    </div>
  );
};

export default Navbar;
