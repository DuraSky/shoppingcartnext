import React, { useEffect, useState } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import { cartLoader } from "../utils/loader";

const CombinedProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cartLoader();
        console.log("inside combined loader", data);
        setCombinedData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // or a spinner
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { cart_products, vouchers, shipping } = combinedData;

  return (
    <CartProvider initialCart={{ cart_products, vouchers }}>
      <ShippingProvider initialShipping={shipping}>{children}</ShippingProvider>
    </CartProvider>
  );
};

export default CombinedProvider;
