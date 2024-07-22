import React, { useEffect } from "react";
import { useDeliveryVendors } from "../DeliveryVendorsProvider";

export const PacketaWidget = ({ closeWidget }) => {
  const { saveVendor } = useDeliveryVendors();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.packeta.com/v6/www/js/library.js";
    script.async = true;
    script.onload = () => {
      if (window.Packeta && window.Packeta.Widget) {
        window.Packeta.Widget.pick(
          "744aa96ba9157919",
          (point) => {
            if (point) {
              console.log("Selected pick-up point:", point);
              saveVendor({
                vendorName: "Zásilkovna",
                id: point.branchCode,
                name: point.name,
                branchCode: point.id,
              });
              closeWidget();
            } else {
              console.log("Pick-up point selection was cancelled.");
              closeWidget();
            }
          },
          {
            language: "cs",
          }
        );
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
