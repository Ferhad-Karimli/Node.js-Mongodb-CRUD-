import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import style from "./index.module.css";
import { NavLink } from "react-router-dom";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3003/product").then((data) =>
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
            <img
              src={`data:image/jpeg;base64,${item.image}`}
              alt="item Image"
            />
            <p>Title:{item.title}</p>

            <div>Description:{item.description}</div>
            <p>Location:{item.location}</p>
            <p>Price:{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
