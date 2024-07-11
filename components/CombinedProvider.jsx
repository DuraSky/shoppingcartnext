import React, { useEffect, useState } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import {
  apiLoader,
  apiLoaderUpdateCartItem,
  dbLoader,
  checkDiscountCode,
  sendUpdatedSurcharge,
} from "../utils/loader";
import { LoadingSpinner } from "./loadingSpinner/LoadingSpinner";
import { FetchError } from "./errorPages/FetchError";
import { YourCartIsEmpty } from "./cart/emptyCart/EmptyCart";

const CombinedProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartKey, setCartKey] = useState(null);

  const fetchData = async () => {
    try {
      const storedCartKey = localStorage.getItem("cart_key");
      if (!storedCartKey) {
        //console.log("apiLoader waiting");

        setLoading(false);
        return;
      }
      //console.log("apiLoader waiting");
      setCartKey(storedCartKey);
      const data = await apiLoader(storedCartKey);
      console.log("inside combined loader", data);
      setCombinedData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    //console.log("calling fetch");
    fetchData();
  }, []);

  const handleCartUpdate = async (method, updatedItem) => {
    console.log("sending this to the API", method, updatedItem);
    try {
      const updatedData = await apiLoaderUpdateCartItem(
        method,
        updatedItem,
        cartKey
      );
      setCombinedData(updatedData);
      console.log("this is the data to update from API ", updatedData);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const handleDiscountCode = async (code, method) => {
    try {
      const updatedData = await checkDiscountCode(code, cartKey, method);
      setCombinedData(updatedData);
      return { success: true, updatedData };
    } catch (error) {
      console.error("Failed to apply discount code:", error);
      return { success: false, error };
    }
  };

  const handleSurchargeChange = async (bpId, productId, checked) => {
    console.log("sending update surchage", bpId, productId, checked);
    try {
      const updatedData = await sendUpdatedSurcharge(
        bpId,
        productId,
        checked,
        cartKey
      );
      setCombinedData(updatedData);
      console.log("Updated data from API:", updatedData);
    } catch (error) {
      console.error("Failed to set surcharge item:", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <FetchError error={error.message} />;
  }

  if (!combinedData) {
    return <YourCartIsEmpty />;
  }

  const {
    cart_products,
    vouchers,
    shipping,
    total_price,
    total_product_price_f,
    total_f,
  } = combinedData;

  return (
    <CartProvider
      initialCart={{
        cart_products,
        vouchers,
        total_price,
        total_product_price_f,
        total_f,
      }}
      onCartUpdate={handleCartUpdate}
      onDiscountCode={handleDiscountCode}
      onSurchargeChange={handleSurchargeChange}
    >
      <ShippingProvider initialShipping={shipping}>{children}</ShippingProvider>
    </CartProvider>
  );
};

export default CombinedProvider;
