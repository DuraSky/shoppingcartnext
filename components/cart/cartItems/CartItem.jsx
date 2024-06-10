import React, { useContext } from "react";
import { CartContext, actionTypes } from "../CartProvider";
import { QuantityControl } from "./allCartItemsStyle";
import Image from "next/image";

const CartItem = ({ item, index }) => {
  const { dispatch } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value > 0) {
      dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: { index, value },
      });
    }
  };

  const handleIncrement = () => {
    dispatch({
      type: actionTypes.CHANGE_QUANTITY,
      payload: { index, value: item.quantity + 1 },
    });
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: { index, value: item.quantity - 1 },
      });
    }
  };

  const handleRemove = () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
  };

  return (
    <>
      <div className="produktName">
        <Image
          src={item.img}
          alt={item.name}
          width={100}
          height={100}
          layout="responsive"
        />
        <p>{item.name}</p>
      </div>
      <div className="dostupnost">
        <p>{item.dostupnost}</p>
      </div>
      <div className="quantityControlWrapper">
        <QuantityControl>
          <button type="button" onClick={handleDecrement}>
            -
          </button>
          <input
            type="text"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />

          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </QuantityControl>
      </div>
      <div className="itemPrice">
        <p>{item.price} Kč</p>
      </div>
      <div className="priceCalc">
        <p>{item.quantity * item.price} Kč</p>
      </div>
      <div className="removeFromCart">
        <button type="button" onClick={handleRemove} className="remove-button">
          X
        </button>
      </div>
    </>
  );
};

export default CartItem;
