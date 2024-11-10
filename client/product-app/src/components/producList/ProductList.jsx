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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products List</h1>
      <div className={style.container}>
        {products.map((item) => (
          <div>
            <img src={item.image} alt="item Image" className={style.img} />
            {console.log(item.image)}
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
