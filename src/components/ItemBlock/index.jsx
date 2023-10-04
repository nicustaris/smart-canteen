import React, { useState } from "react";

const ItemBlock = ({
  name,
  price,
  imageUrl,
  setCartItems,
  setCartCount,
  cartCount,
}) => {
  const [itemCount, setItemCount] = useState(0);

  const productAdd = () => {
    setItemCount(itemCount + 1);
  };

  const handleOnClick = () => {
    const newItem = {
      productName: name,
      productPrice: price,
      productUrl: imageUrl,
    };

    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    setCartCount(cartCount + 1);
  };

  return (
    <div className="smartcanteen-block-container">
      <div className="smartcanteen-block">
        <img className="smartcanteen-block__image" src={imageUrl} alt="item" />

        <h4 className="smartcanteen-block__title">{name}</h4>
        <div className="smartcanteen-block__bottom">
          <div className="smartcanteen-block__price">£{price}</div>
          <button
            onClick={productAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span onClick={handleOnClick}>Add</span>
            <i>{itemCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBlock;
