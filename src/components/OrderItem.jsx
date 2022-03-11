import React, { useContext } from "react";
import "../styles/OrderItem.scss";
import icon_close from "../assets/icons/icon_close.png";
import appContext from "../context/AppContext";
const OrderItem = ({ product }) => {
  const { price, title, images } = product;
  const { removeFromCart } = useContext(appContext);

  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </p>
      <img src={icon_close} alt="close" onClick={handleRemove} />
    </div>
  );
};

export default OrderItem;
