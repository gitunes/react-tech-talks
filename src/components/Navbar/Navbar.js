import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav className="navbar bg-light">
      <div className="w-100 d-flex align-items-center justify-content-end p-3 header__right--notification">
      <Link to="/cart">
        <button
          type="button"
          className="btn btn-primary position-relative me-3"
          id="show-notification"
        >
          <i
            className="fa-solid fa-cart-shopping me-3"
            id="show-notification-icon"
          ></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
          </span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
