import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import logo from "../assets/logos/logo_yard_sale.svg";
import icon_shopping_cart from "../assets/icons/icon_shopping_cart.svg";
import icon_menu from "../assets/icons/icon_menu.svg";
import Menu from "./Menu";
import appContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";

const Header = () => {
  const {
    state: { cart },
  } = useContext(appContext);

  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />
      <div className="navbar-left nav-container">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={icon_shopping_cart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />} {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
