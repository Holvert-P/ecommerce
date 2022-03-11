import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrder.scss";
import arrow from "../assets/icons/flechita.svg";
import appContext from "../context/AppContext";
const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(appContext);

  const TOTAL = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((item, index) => (
          <OrderItem product={item} key={index} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(TOTAL())}
          </p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
