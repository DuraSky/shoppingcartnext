import React, { useEffect } from "react";
import { useDeliveryVendors } from "../DeliveryVendorsProvider";

export const PPLWidget = ({ closeWidget }) => {
  const { saveVendor } = useDeliveryVendors();

  useEffect(() => {
    // Append the script to the body
    const script = document.createElement("script");
    script.src = "https://www.ppl.cz/sources/map/main.js";
    script.async = true;
    document.body.appendChild(script);

    // Append the stylesheet to the head
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.ppl.cz/sources/map/main.css";
    document.head.appendChild(link);

    // Event listener for map
    const handlePplMapEvent = (event) => {
      console.log("PPL Parcelshop event:", event);
      if (event.detail) {
        const point = event.detail;
        console.log("Selected PPL Parcelshop:", point);
        saveVendor({
          vendorName: "PPL ParcelShop",
          id: point.id,
          name: point.name,
          branchCode: point.zip,
        });
        closeWidget();
      }
    };

    document.addEventListener("ppl-parcelshop-map", handlePplMapEvent);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
      document.removeEventListener("ppl-parcelshop-map", handlePplMapEvent);
    };
  }, [saveVendor, closeWidget]);

  return (
    <div
      id="ppl-parcelshop-map"
      data-lat="50"
      data-lng="15"
      data-mode="default"
      style={{
        width: "100%",
        height: "100%",
        minWidth: "350px",
        minHeight: "600px",
      }}
    ></div>
  );
};
