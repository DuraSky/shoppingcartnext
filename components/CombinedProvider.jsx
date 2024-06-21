import React, { useEffect, useState } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import { apiLoader, apiLoaderUpdateCartItem } from "../utils/loader";

const CombinedProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await apiLoader();
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

  const handleCartUpdate = async (updatedItem) => {
    console.log("sending this to the API", updatedItem);
    try {
      const updatedData = await apiLoaderUpdateCartItem(updatedItem);
      setCombinedData(updatedData);
      console.log("this is the data to update from API ", updatedData);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { cart_products, vouchers, shipping } = combinedData;

  return (
    <CartProvider
      initialCart={{ cart_products, vouchers }}
      onCartUpdate={handleCartUpdate}
    >
      <ShippingProvider initialShipping={shipping}>{children}</ShippingProvider>
    </CartProvider>
  );
};

export default CombinedProvider;
