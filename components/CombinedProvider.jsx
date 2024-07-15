// CombinedProvider.jsx
import React, { useEffect, useState } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import { AlertProvider } from "./alertPopups/AlertProvider";
import {
  apiLoader,
  apiLoaderUpdateCartItem,
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
        setLoading(false);
        return;
      }
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
    fetchData();
  }, []);

  const handleCartUpdate = async (method, updatedItem) => {
    try {
      const updatedData = await apiLoaderUpdateCartItem(
        method,
        updatedItem,
        cartKey
      );
      setCombinedData(updatedData);
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

  const handleSurchargeChange = async (
    bpId,
    groupId,
    productId,
    checked,
    prevProductId = null
  ) => {
    try {
      const actualPrevProductId =
        productId === prevProductId ? null : prevProductId;
      const updatedData = await sendUpdatedSurcharge(
        bpId,
        productId,
        checked,
        cartKey,
        actualPrevProductId
      );
      setCombinedData(updatedData);
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
    alerts, // Extract alerts from combinedData
  } = combinedData;

  return (
    <AlertProvider initialAlerts={alerts || []}>
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
        <ShippingProvider initialShipping={shipping}>
          {children}
        </ShippingProvider>
      </CartProvider>
    </AlertProvider>
  );
};

export default CombinedProvider;
