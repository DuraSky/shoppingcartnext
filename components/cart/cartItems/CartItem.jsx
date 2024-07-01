import { useState, useRef, useContext, useCallback } from "react";
import { CartContext, actionTypes } from "../CartProvider";
import { QuantityControl } from "./allCartItemsStyle";
import Image from "next/image";

const CartItem = ({ item, index }) => {
  const { dispatch, onCartUpdate } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);
  const debounceTimeout = useRef(null);

  const updateCart = async (quantity, action) => {
    const updatedItem = { bpId: item.bp_id, quantity };
    await onCartUpdate(action, updatedItem);
  };

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value > 0) {
      setQuantity(value);
      debounceUpdateCart(value);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    debounceUpdateCart(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      debounceUpdateCart(newQuantity);
    }
  };

  const debounceUpdateCart = useCallback((newQuantity) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      updateCart(newQuantity, "UPDATE");
    }, 500);
  }, []);

  const handleRemove = async () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
    const updatedItem = { bpId: item.bp_id };
    await onCartUpdate("DELETE", updatedItem);
  };

  return (
    <>
      <div className="produktName">
        <Image
          src={item.image}
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
            value={quantity}
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
        <p>{quantity * item.price} Kč</p>
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
