import React, { useContext } from "react";
import { ShippingContext, actionTypes } from "../ShippingProvider";
import Image from "next/image";
import { StyledPriceOption } from "./shippingPriceOptionStyle";
import { imageLoader } from "../../imageLoader/imageLoader";
import { updateShippingAndPriceMethods } from "../../../utils/loader";
import { useDeliveryVendors } from "../deliveryVendorsApis/DeliveryVendorsProvider";

const ShippingPriceOptions = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const {
    selectedShippingOptions,
    selectedPaymentOption,
    selectedShippingOptionPackageId,
    selectedShippingOption,
  } = state;
  const { selectedVendor } = useDeliveryVendors();

  const handlePriceMethodChange = (
    name,
    price,
    image,
    price_f,
    delivery_payment_id
  ) => {
    dispatch({ type: actionTypes.SET_SELECTED_PAYMENT_OPTION, payload: name });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_DELIVERY_PAYMENT_ID,
      payload: delivery_payment_id,
    });

    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_IMG,
      payload: image,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE,
      payload: price,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE_CURRENCY,
      payload: price_f,
    });

    let branchKey = null;
    if (
      ["Zásilkovna", "Balíkovna", "PPL ParcelShop", "Balík Na poštu"].includes(
        selectedShippingOption
      ) &&
      selectedVendor.vendorName === selectedShippingOption
    ) {
      branchKey = selectedVendor.branchCode;
    }

    let branchName = null;
    if (
      ["Zásilkovna", "Balíkovna", "PPL ParcelShop", "Balík Na poštu"].includes(
        selectedShippingOption
      ) &&
      selectedVendor.vendorName === selectedShippingOption
    ) {
      branchName = selectedVendor.name;
    }

    console.log("Selected Vendor Name:", selectedVendor.vendorName);
    console.log("Selected Shipping Option Name:", selectedShippingOption);
    console.log("Branch Key:", branchKey);
    console.log("BranchName:", branchName);

    updateShippingAndPriceMethods(
      selectedShippingOptionPackageId,
      delivery_payment_id,
      branchKey,
      branchName
    );
  };

  return (
    <>
      {selectedShippingOptions &&
        selectedShippingOptions.map((option, index) => (
          <StyledPriceOption key={index} className="payOption">
            <label>
              <input
                type="radio"
                name="shippingPriceMethod"
                value={option.name}
                onChange={() => {
                  handlePriceMethodChange(
                    option.name,
                    option.price,
                    option.image,
                    option.price_f,
                    option.delivery_payment_id
                  );
                }}
                checked={selectedPaymentOption === option.name}
              />
              <Image
                loader={imageLoader}
                src={option.image}
                alt="Obrazek platby"
                width={100}
                height={100}
                layout="intrinsic"
              />
              <p>{option.name}</p>
              <p className="price">{option.price_f}</p>
            </label>
          </StyledPriceOption>
        ))}
    </>
  );
};

export default ShippingPriceOptions;
