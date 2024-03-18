import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  const cartButtonLabel = isInCart ? "Remove From Cart" : "Add to Cart";
  const itemClassName = isInCart ? "in-cart" : "";

  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {cartButtonLabel}
      </button>
    </li>
  );
}

export default Item;
