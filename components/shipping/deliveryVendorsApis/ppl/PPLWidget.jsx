// components/PPLWidget.jsx
import React, { useEffect } from "react";
import { useDeliveryVendors } from "../DeliveryVendorsProvider";

export const PPLWidget = ({ closeWidget }) => {
  const { saveVendor } = useDeliveryVendors();

  useEffect(() => {
    const handleMessage = (event) => {
      //console.log("DATAAA FROM PPL", event);
      const { data } = event;
      if (data.source === "ppl-widget" && data.message === "pickerResult") {
        const point = data.point;
        if (point) {
          console.log("Selected pick-up point:", point);
          saveVendor({
            vendorName: "PPL ParcelShop",
            id: point.zip,
            name: point.name,
            branchCode: new String(point.id),
          });
          closeWidget();
        } else {
          console.log("Pick-up point selection was cancelled.");
          closeWidget();
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [saveVendor, closeWidget]);

  return (
    <iframe
      src="/ppl-widget.html"
      style={{
        width: "1600px",
        height: "1000px",
        border: "none",
      }}
    ></iframe>
  );
};
