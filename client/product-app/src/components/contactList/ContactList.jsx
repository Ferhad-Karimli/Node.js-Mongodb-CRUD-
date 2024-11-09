import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import style from "./index.module.css";
import { NavLink } from "react-router-dom";
export default function ContactList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3003/contact").then((data) =>
      setProducts(data?.data)
    );
  }, []);

  console.log(products, "products");
  return (
    <div>
      <ul>
        <NavLink to="/products">
          {" "}
          <li>Products</li>
        </NavLink>
        <NavLink to="/">
          <li>Add Product</li>
        </NavLink>
        <NavLink to="/contact-forum">
          <li>Add Contact</li>
        </NavLink>
        <NavLink to="/contact-list">
          <li>Contacts</li>
        </NavLink>
      </ul>
      <h1>Products</h1>
      <div className={style.container}>
        {products.map((item) => (
          <div>
            <p>Name:{item.name}</p>

            <div>Sername:{item.sername}</div>
            <p>Location:{item.birthdayPlace}</p>
            <p>Phone:{item.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
