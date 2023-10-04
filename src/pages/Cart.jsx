import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title"> Basket</h2>
          <div className="cart__clear">
            <span>Empty Basket</span>
          </div>
        </div>
        <div className="content__items_cart">
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="smartcateen-block__image"
                src="https://img.freepik.com/premium-photo/fresh-blueberry-smoothie-isolated-white-background_185193-50255.jpg"
                alt="item"
              />
            </div>
            <div className="cart__item-info">
              <h3>Blueberry Blast Smoothie</h3>
            </div>

            <div className="cart__item-price">
              <b>£6.5</b>
            </div>
            <div className="cart__item-remove">X</div>
          </div>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Quantity: <b>3</b>
            </span>
            <span>
              Price: <b>£6.5</b>
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
              <span>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
