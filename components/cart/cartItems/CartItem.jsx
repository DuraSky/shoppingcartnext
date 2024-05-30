import React, { useContext } from "react";
import { CartContext, actionTypes } from "../CartProvider";

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

  const handleRemove = () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
  };

  return (
    // <div className="cart-item">
    //   <div className="cart-item-header">
    //     <img src={item.img} alt={item.name} />
    //     <p>{item.name}</p>
    //     <button type="button" onClick={handleRemove} className="remove-button">
    //       X
    //     </button>
    //   </div>
    //   <div className="cart-item-body">
    //     <p>{item.dostupnost}</p>
    //     <input
    //       type="number"
    //       value={item.quantity}
    //       onChange={handleQuantityChange}
    //       className="quantity-input"
    //     />
    //     {/* <p>{item.price} Kč</p> */}
    //     <p className="priceCalc">{item.quantity * item.price} Kč</p>
    //   </div>
    // </div>
    //);

    <>
      <div className="produktName">
        <img src={item.img} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <div className="wrapper">
        <div className="dostupnost">
          <p>{item.dostupnost}</p>
        </div>
        <div className="quantityAndPrice">
          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <p className="priceCalc">{item.quantity * item.price} Kč</p>
        </div>
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
