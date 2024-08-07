import React, {
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import { CartContext, actionTypes } from "../CartProvider";
import { QuantityControl } from "./allCartItemsStyle";
import Image from "next/image";
import { imageLoader } from "../../imageLoader/imageLoader";

const CartItem = ({ item, index }) => {
  const { dispatch, onCartUpdate } = useContext(CartContext);

  const debounceRef = useRef(null);

  const updateCart = async (quantity) => {
    const updatedItem = { bpId: item.bp_id, quantity };
    await onCartUpdate("UPDATE", updatedItem);
  };

  const debouncedUpdateCart = useCallback((quantity) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      updateCart(quantity);
    }, 400);
  }, []);

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value > 0) {
      dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: { index, value },
      });
      debouncedUpdateCart(value);
    }
  };

  const handleIncrement = () => {
    const newQuantity = item.quantity + 1;
    dispatch({
      type: actionTypes.CHANGE_QUANTITY,
      payload: { index, value: newQuantity },
    });
    debouncedUpdateCart(newQuantity);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: { index, value: newQuantity },
      });
      debouncedUpdateCart(newQuantity);
    }
  };

  const handleRemove = async () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
    const updatedItem = { bpId: item.bp_id };
    await onCartUpdate("DELETE", updatedItem);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="produktName">
        <Image
          loader={imageLoader}
          src={item.image}
          alt={item.name}
          width={200}
          height={200}
          layout="responsive"
        />
        <p>{item.name}</p>
      </div>
      <div className="dostupnost" style={{ color: item.availability_color }}>
        <p>{item.availability_name}</p>
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
        <p>{item.price_f}</p>
      </div>
      <div className="priceCalc">
        {/* <p>{item.quantity * item.price} Kč</p> */}
        {item.total_price_f}
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
