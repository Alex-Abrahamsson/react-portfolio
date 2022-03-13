import React from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.scss";

export const NavBar = () => {
  return (
    <div>
      <Link to="/react-portfolio" className={style.hrefLink}>
        {"Home"}
      </Link>
    </div>
  );
};

export default NavBar;