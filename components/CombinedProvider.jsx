import React, { useEffect, useState, createContext } from "react";
import { CartProvider } from "./cart/CartProvider";
import { ShippingProvider } from "./shipping/ShippingProvider";
import { AlertProvider } from "./alertPopups/AlertProvider";
import { DeliveryVendorsProvider } from "./shipping/deliveryVendorsApis/DeliveryVendorsProvider";
import {
  apiLoader,
  apiLoaderUpdateCartItem,
  checkDiscountCode,
  sendUpdatedSurcharge,
  sendSignIn,
} from "../utils/loader";
import { LoadingSpinner } from "./loadingSpinner/LoadingSpinner";
import { FetchError } from "./errorPages/FetchError";
import { YourCartIsEmpty } from "./cart/emptyCart/EmptyCart";

export const CombinedProviderContext = createContext();

const saveCustomerDetails = (customer) => {
  const customerDetails = {
    firstName: customer.first_name,
    lastName: customer.last_name,
    street: customer.street,
    zip: customer.zip,
    city: customer.city,
    email: customer.email,
    phone: customer.phone,
  };
  const savedFormState =
    JSON.parse(localStorage.getItem("personalInfoForm")) || {};
  const mergedFormState = { ...customerDetails, ...savedFormState };
  localStorage.setItem("personalInfoForm", JSON.stringify(mergedFormState));
};

const CombinedProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartKey, setCartKey] = useState(null);

  console.log("inside combined loader", combinedData);

  const fetchData = async (key = null) => {
    try {
      const storedCartKey = key || localStorage.getItem("cart_key");
      if (!storedCartKey) {
        setLoading(false);
        return;
      }
      setCartKey(storedCartKey);
      const data = await apiLoader(storedCartKey);
      setCombinedData(data);
      if (data.customer) {
        saveCustomerDetails(data.customer);
      }
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

  const handleSignIn = async (email, password) => {
    try {
      const data = await sendSignIn(email, password);
      saveCustomerDetails(data.customer);

      console.log("Sign-in successful:", data);

      setCombinedData(data);
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };

  const handleSignOut = () => {
    setCombinedData((prevData) => ({
      ...prevData,
      customer: null,
    }));
    localStorage.removeItem("personalInfoForm");
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
    alerts,
    customer,
  } = combinedData;

  return (
    <CombinedProviderContext.Provider
      value={{
        handleCartUpdate,
        handleDiscountCode,
        handleSurchargeChange,
        handleSignIn,
        handleSignOut,
        customer,
      }}
    >
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
            <DeliveryVendorsProvider>{children}</DeliveryVendorsProvider>
          </ShippingProvider>
        </CartProvider>
      </AlertProvider>
    </CombinedProviderContext.Provider>
  );
};

export default CombinedProvider;
