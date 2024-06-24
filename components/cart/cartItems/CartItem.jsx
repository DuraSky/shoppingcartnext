import React, { useContext } from "react";
import { CartContext, actionTypes } from "../CartProvider";
import { QuantityControl } from "./allCartItemsStyle";
import Image from "next/image";

const CartItem = ({ item, index }) => {
  const { dispatch, onCartUpdate } = useContext(CartContext);

  const updateCart = async (quantity, action) => {
    console.log(
      "updateCart called with quantity:",
      quantity,
      "action:",
      action
    );
    const updatedItem = { bpId: item.bp_id, quantity };
    await onCartUpdate(action, updatedItem);
  };

  const handleQuantityChange = async (event) => {
    const value = Number(event.target.value);
    if (value > 0) {
      console.log("handleQuantityChange called with value:", value);
      await updateCart(value, "UPDATE");
    }
  };

  const handleIncrement = async () => {
    console.log("handleIncrement called");
    await updateCart(item.quantity + 1, "UPDATE");
  };

  const handleDecrement = async () => {
    if (item.quantity > 1) {
      console.log("handleDecrement called");
      await updateCart(item.quantity - 1, "UPDATE");
    }
  };

  const handleRemove = async () => {
    console.log("handleRemove called");
    // Dispatch the action to remove the item locally
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
    // Send only bpId to the API with DELETE method
    const updatedItem = { bpId: item.bp_id };
    //await onCartUpdate("DELETE", updatedItem);
  };

  return (
    <>
      <div className="produktName">
        <Image
          src={item.image}
          //src="https://placehold.jp/150x150.png"
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
