import React from "react";
import style from "./styles/Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={style.nav}>
      <div className={style.nav_left_part}>
        <Link to="/">
          <h3>CustomerFAVS NEXT</h3>
        </Link>
      </div>
      <div className={style.nav_right_part}>
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <Link to="/Customers">
          <h5>Customers</h5>
        </Link>
        <Link to="/Favourites">
          <h5>Favourites</h5>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
