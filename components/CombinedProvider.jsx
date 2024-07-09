import React, { useEffect, useState } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import { apiLoader, apiLoaderUpdateCartItem, dbLoader } from "../utils/loader";
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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <FetchError error={error.message} />;
  }

  if (!combinedData) {
    return <YourCartIsEmpty />;
  }

  const { cart_products, vouchers, shipping, total_price, total_f } =
    combinedData;

  return (
    <CartProvider
      initialCart={{ cart_products, vouchers, total_price, total_f }}
      onCartUpdate={handleCartUpdate}
    >
      <ShippingProvider initialShipping={shipping}>{children}</ShippingProvider>
    </CartProvider>
  );
};

export default CombinedProvider;
