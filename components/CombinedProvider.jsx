import React, { useEffect, useState } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import { apiLoader, apiLoaderUpdateCartItem, dbLoader } from "../utils/loader";
import { LoadingSpinner } from "./loadingSpinner/LoadingSpinner";
import { FetchError } from "./errorPages/FetchError";

const CombinedProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await apiLoader();
      //const data = await dbLoader();
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
    console.log("sending this to the API", method, updatedItem);
    try {
      const updatedData = await apiLoaderUpdateCartItem(method, updatedItem);
      setCombinedData(updatedData);
      console.log("this is the data to update from API ", updatedData);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <FetchError error={error.message} />;
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
