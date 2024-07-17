import React, { useEffect } from "react";
import { useDeliveryVendors } from "../DeliveryVendorsProvider";

export const PPLWidget = ({ closeWidget }) => {
  const { saveVendor } = useDeliveryVendors();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.ppl.cz/js/ppl.widget.pickup.js";
    script.async = true;
    script.onload = () => {
      if (window.PPLWidget) {
        window.PPLWidget.init({
          language: "cs",
          country: "CZ",
          callback: (point) => {
            if (point) {
              console.log("Selected pick-up point:", point);
              saveVendor({
                vendorName: "PPL",
                id: point.id,
                name: point.name,
                branchCode: point.zip,
              });
              closeWidget();
            } else {
              console.log("Pick-up point selection was cancelled.");
              closeWidget();
            }
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [saveVendor, closeWidget]);

  return null;
};
