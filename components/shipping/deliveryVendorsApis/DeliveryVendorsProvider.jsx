import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const DeliveryVendorsContext = createContext();

// Create a provider component
export const DeliveryVendorsProvider = ({ children }) => {
  const [selectedVendor, setSelectedVendor] = useState({
    vendorName: null,
    id: null,
    name: null,
    branchCode: null,
  });

  useEffect(() => {
    const savedVendor = localStorage.getItem("selectedVendor");
    if (savedVendor) {
      setSelectedVendor(JSON.parse(savedVendor));
    }
  }, []);

  const saveVendor = (vendor) => {
    const vendorData = {
      vendorName: vendor.vendorName,
      id: vendor.id,
      name: vendor.name,
      branchCode: vendor.branchCode,
    };
    setSelectedVendor(vendorData);
    localStorage.setItem("selectedVendor", JSON.stringify(vendorData));
    console.log("Saved vendor", vendorData);
  };

  return (
    <DeliveryVendorsContext.Provider value={{ selectedVendor, saveVendor }}>
      {children}
    </DeliveryVendorsContext.Provider>
  );
};

// Custom hook to use the DeliveryVendorsContext
export const useDeliveryVendors = () => {
  return useContext(DeliveryVendorsContext);
};
