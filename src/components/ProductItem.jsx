import React, { useContext, useState } from "react";
import "../styles/ProductItem.scss";
import addCart from "../assets/icons/bt_add_to_cart.svg";
import appContext from "../context/AppContext";
import noImage from "../assets/noImage.png";

const ProductItem = ({ product }) => {
  const { price, images, title, category } = product;

  const { addToCart } = useContext(appContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <span className="category-product">{category?.name}</span>
      <img src={images?.[0] !== "" ? images?.[0] : noImage} alt={title} />
      <div className="product-info">
        <div>
          <p>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
          <p>Bike</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
