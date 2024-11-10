import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
function Header() {
  return (
    <div>
      <div className={style.container}>
        <NavLink to="/products">
          {" "}
          <div className={style.item}>Products</div>
        </NavLink>
        <NavLink to="/">
          <div className={style.item}>Add Product</div>
        </NavLink>
        <NavLink to="/contact-forum">
          <div className={style.item}>Add Contact</div>
        </NavLink>
        <NavLink to="/contact-list">
          <div className={style.item}>Contacts</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
