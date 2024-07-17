import React, { useEffect } from "react";
import { useDeliveryVendors } from "../DeliveryVendorsProvider";

export const BalikovnaWidget = ({ closeWidget }) => {
  console.log("OPENING BALIKOVNA WIDGET");
  const { saveVendor } = useDeliveryVendors();

  const handlePostMessage = (event) => {
    console.log("HANDLEPOSTMESSAGE EVENT", event);

    if (event.origin !== "https://b2c.cpost.cz") return;

    const { data } = event;
    console.log("DATAAAAAAA", data);
    if (data.message === "pickerResult") {
      const point = data.point;
      if (point) {
        console.log("Selected pick-up point:", point);
        saveVendor({
          vendorName: "Balíkovna",
          id: point.id,
          name: point.name,
          branchCode: point.zip,
        });
        closeWidget();
      } else {
        console.log("Pick-up point selection was cancelled.");
        closeWidget();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("message", handlePostMessage);

    return () => {
      window.removeEventListener("message", handlePostMessage);
    };
  }, []);

  return (
    <iframe
      src="https://b2c.cpost.cz/locations/?type=BALIKOVNY"
      allow="geolocation"
      style={{ width: "100%", height: "500px", zIndex: "100", border: "none" }}
      title="Výběr místa pro vyzvednutí zásilky"
    />
  );
};
