import React, { useState, useRef, useContext, useEffect } from "react";
import { ShippingContext } from "./ShippingProvider";
import { CartContext } from "../cart/CartProvider";
import { useRouter } from "next/router";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { ShippingPageLayout, StyledPreview } from "./shippingWrapperStyle";
import RecapWrapper from "../recap/RecapWrapper";
import ShippingOption from "./shippingComponents/ShippingOption";
import ShippingPriceOptions from "./shippingComponents/ShippingPriceOptions";
import useFormErrors from "./FormErrors";
import {
  SelectedShippingPreview,
  SelectedPaymentPreview,
  PersonalInfoPreview,
} from "./shippingComponents/SelectedPreview";
import { PageControl } from "../pageControl/PageControl";

import { sendOrder } from "../../utils/loader";
import { PPLWidget } from "./deliveryVendorsApis/ppl/PPLWidget";
import Modal from "./deliveryVendorsApis/Modal";
import { useDeliveryVendors } from "./deliveryVendorsApis/DeliveryVendorsProvider";

import { HiOutlineCreditCard } from "react-icons/hi2";

export const ShippingWrapper = () => {
  const { state: shippingState } = useContext(ShippingContext);
  const {
    selectedPaymentOption,
    selectedPaymentOptionDeliveryPaymentId,
    selectedPaymentOptionImg,
    selectedPaymentOptionPrice,
    selectedPaymentOptionPriceCurrency,
    selectedShippingOption,
    selectedShippingOptionPackageId,
    selectedShippingOptionImg,
    selectedShippingPrice,
    selectedShippingPriceCurrency,
  } = shippingState;

  const { state: cartState } = useContext(CartContext);
  const { cart_total_with_shipping } = cartState;

  const { selectedVendor } = useDeliveryVendors();

  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [togglePriceOption, setTogglePriceOption] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [buttonText, setButtonText] = useState("Odeslat objednávku");

  const [previewSelectedShipping, setPreviewSelectedShipping] = useState({
    option: "Zvolte dopravu",
    img: HiOutlineCreditCard,
    price: null,
    packageId: null,
  });
  const [previewSelectedPayment, setPreviewSelectedPayment] = useState({
    option: "Zvolte typ platby",
    img: HiOutlineCreditCard,
    price: null,
    delivery_payment_id: null,
  });

  const [formErrors, updateFormErrors] = useFormErrors();
  const formRef = useRef(null);
  const router = useRouter();

  const [personalInfoKey, setPersonalInfoKey] = useState(0);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleShipping = () => {
    setToggleShipping(!toggleShipping);
  };

  const handleTogglePriceOption = () => {
    setTogglePriceOption(!togglePriceOption);
  };

  const handleToggleInfo = () => {
    setToggleInfo(!toggleInfo);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const hasErrors = Object.keys(formErrors).length > 0;

    const requiresBranchSelection =
      selectedShippingOption === "Zásilkovna" ||
      selectedShippingOption === "Balíkovna" ||
      selectedShippingOption === "PPL ParcelShop" ||
      selectedShippingOption === "Balík Na poštu";

    if (
      requiresBranchSelection &&
      selectedVendor.vendorName !== selectedShippingOption
    ) {
      return;
    }

    if (selectedPaymentOption === null) {
      setTogglePriceOption(true);
      return;
    }

    if (hasErrors) {
      setToggleInfo(true);
    }

    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  useEffect(() => {
    if (selectedPaymentOption !== null) {
      setTogglePriceOption(false);
      setToggleInfo(true);
    }
  }, [selectedPaymentOption]);

  const handleFormError = (errors) => {
    console.log("Incoming errors from PersonalInfo: ", errors);
    updateFormErrors(errors);
  };

  useEffect(() => {
    if (selectedPaymentOption === null) {
      setButtonText("Zvolte typ platby");
    } else if (Object.keys(formErrors).length > 0) {
      const firstErrorKey = Object.keys(formErrors).find(
        (key) => formErrors[key]
      );
      if (firstErrorKey) {
        setButtonText(formErrors[firstErrorKey].message);
      }
    } else {
      setButtonText("Odeslat objednávku →");
    }
  }, [selectedPaymentOption, formErrors]);

  useEffect(() => {
    setPreviewSelectedShipping({
      option: selectedShippingOption || "Zvolte dopravu",
      img: selectedShippingOptionImg || "failsafe",
      price: selectedShippingPrice,
      price_f: selectedShippingPriceCurrency,
      packageId: selectedShippingOptionPackageId,
    });
    setToggleShipping(false);
    setTogglePriceOption(true);
  }, [
    selectedShippingOption,
    selectedShippingOptionImg,
    selectedShippingPrice,
    selectedShippingPriceCurrency,
    selectedShippingOptionPackageId,
  ]);

  useEffect(() => {
    if (selectedPaymentOption === null) {
      setPreviewSelectedPayment({
        option: "Zvolte typ platby",
        img: "assets/card.png",
        price: null,
        price_f: null,
        delivery_payment_id: null,
      });
    } else {
      setPreviewSelectedPayment({
        option: selectedPaymentOption,
        img: selectedPaymentOptionImg,
        price: selectedPaymentOptionPrice,
        price_f: selectedPaymentOptionPriceCurrency,
        delivery_payment_id: selectedPaymentOptionDeliveryPaymentId,
      });
    }
  }, [selectedPaymentOption, selectedPaymentOptionImg]);

  const handleFormSubmitSuccess = async (personalData, cartKey) => {
    try {
      const data = await sendOrder(personalData, cartKey);
      if (data && data.redirectLink) {
        const fullRedirectLink = `${process.env.NEXT_PUBLIC_URL}${data.redirectLink}`;

        router.push(fullRedirectLink);
      }
    } catch (error) {
      console.error("Order submission failed", error);
    }
  };

  const handleGoBack = () => {
    router.push({
      pathname: "/vas-kosik",
    });
  };

  useEffect(() => {
    const handleSignInStateChange = () => {
      setPersonalInfoKey((prevKey) => prevKey + 1);
    };
    window.addEventListener("signInStateChange", handleSignInStateChange);
    return () => {
      window.removeEventListener("signInStateChange", handleSignInStateChange);
    };
  }, []);

  return (
    <ShippingPageLayout>
      <div className="recapWrapper">
        <RecapWrapper
          handleGoBack={handleGoBack}
          handleSubmit={handleSubmit}
          buttonText={buttonText}
        />
      </div>

      <div className="allContent">
        <div className="headerWithButton">
          <h2>Doprava</h2>
          <div className="changeButton" onClick={handleToggleShipping}>
            Změnit typ dopravy
            <svg
              className={`arrow ${toggleShipping ? "rotated" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
              />
            </svg>
          </div>
        </div>
        <div className="shippingContent">
          <SelectedShippingPreview
            previewSelectedShipping={previewSelectedShipping}
          />
          <div
            className={`collapsible-content ${toggleShipping ? "open" : ""}`}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ShippingOption />
            </div>
          </div>
        </div>

        <div className="headerWithButton">
          <h2>Platba</h2>
          <div className="changeButton" onClick={handleTogglePriceOption}>
            Změnit typ platby
            <svg
              className={`arrow ${togglePriceOption ? "rotated" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
              />
            </svg>
          </div>
        </div>
        <div className="priceContent">
          <SelectedPaymentPreview
            previewSelectedPayment={previewSelectedPayment}
          />
          <div
            className={`collapsible-content ${togglePriceOption ? "open" : ""}`}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ShippingPriceOptions />
            </div>
          </div>
        </div>

        <div className="headerWithButton">
          <h2>Fakturační a dodací adresa</h2>
          <div className="changeButton" onClick={handleToggleInfo}>
            Změnit osobní údaje
            <svg
              className={`arrow ${toggleInfo ? "rotated" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
              />
            </svg>
          </div>
        </div>
        <div className="formContent">
          <PersonalInfoPreview formErrors={formErrors} submitted={submitted} />
          <div className={`collapsible-content ${toggleInfo ? "open" : ""}`}>
            <div onClick={(e) => e.stopPropagation()}>
              <PersonalInfo
                key={personalInfoKey}
                ref={formRef}
                onFormSubmitSuccess={handleFormSubmitSuccess}
                onError={handleFormError}
              />
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <>
          <h3 className="pageControlMobilePrice">
            Celková cena: <span>{cart_total_with_shipping}</span>
          </h3>
          <div className="pageControl">
            <PageControl
              handleGoBack={handleGoBack}
              handleSubmit={handleSubmit}
              buttonText={buttonText}
            />
          </div>
        </>
      )}
    </ShippingPageLayout>
  );
};

export default ShippingWrapper;
