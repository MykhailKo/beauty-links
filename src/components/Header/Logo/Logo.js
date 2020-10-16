import React from "react";
import { Link } from "react-router-dom";
import { logo } from "./logo.module.scss";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className={logo}></div>
    </Link>
  );
};

export default Logo;
