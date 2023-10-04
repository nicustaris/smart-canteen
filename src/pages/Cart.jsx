import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartCount, setCartItems }) => {
  const handleOnClick = () => {
    setCartCount(0);
    setCartItems([]);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.productPrice, 0);
  };

  const orderComplete = () => {
    setCartCount(0);
    setCartItems([]);
    alert("Order complete");
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title"> Basket</h2>
          <div className="cart__clear">
            <span onClick={handleOnClick}>Empty Basket</span>
          </div>
        </div>
        <div className="content__items_cart">
          {cartItems.map((item) => (
            <div key={item.productName} className="cart__item">
              <div className="cart__item-img">
                <img
                  className="smartcateen-block__image"
                  src={item.productUrl}
                  alt="item"
                />
              </div>
              <div className="cart__item-info">
                <h3>{item.productName}</h3>
              </div>

              <div className="cart__item-price">
                <b>£{item.productPrice}</b>
              </div>
              <div className="cart__item-remove">X</div>
            </div>
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Quantity: <b>{cartItems.length}</b>
            </span>
            <span>
              Price: <b>£{calculateTotalPrice().toFixed(2)}</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <span>Back</span>
            </Link>
            <div className="button pay-btn">
              <span onClick={orderComplete}>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
