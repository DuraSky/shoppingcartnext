import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Recap from "../recap/Recap";
import { BillingAddress } from "./billingAddress/BillingAddress";
import { CompanyAddress } from "./companyAddress/CompanyAddress";
import { DeliveryAddress } from "./deliveryAddress/DeliveryAddress";
import { Comment } from "./comment/Comment";
import { Form, CheckboxGroup, Input, Label } from "./personalInfoStyle";

const PersonalInfo = React.forwardRef(
  ({ onFormSubmitSuccess, onError }, ref) => {
    const [showDeliveryAddress, setShowDeliveryAddress] = useState(false);
    const [showCompanyAddress, setShowCompanyAddress] = useState(false);
    const [showComment, setShowComment] = useState(false);

    const {
      register,
      handleSubmit,
      setValue,
      unregister,
      watch,
      formState: { errors },
      trigger,
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      onFormSubmitSuccess();
    };

    useEffect(() => {
      //console.log("in personalInfo", { errors });
      onError(errors);
    }, [onError, errors]);

    // Function to handle blur event and update parent with current errors
    const handleBlur = async (fieldName) => {
      await trigger(fieldName);
      onError(errors);
    };

    //const formValues = watch();

    // useEffect(() => {
    //   const savedFormData = localStorage.getItem("formData");
    //   if (savedFormData) {
    //     const parsedFormData = JSON.parse(savedFormData);
    //     Object.keys(parsedFormData).forEach((key) => {
    //       setValue(key, parsedFormData[key]);
    //     });
    //   }
    //   trigger(); // Trigger validation after setting values
    // }, [setValue, trigger]);

    // useEffect(() => {
    //   localStorage.setItem("formData", JSON.stringify(formValues));
    // }, [formValues]);

    useEffect(() => {
      if (!showDeliveryAddress) {
        unregister([
          "company",
          "deliveryName",
          "deliverySurname",
          "deliveryStreet",
          "deliveryPsc",
          "deliveryTown",
        ]);
      }
      if (!showCompanyAddress) {
        unregister(["companyName", "ic", "dic"]);
      }
      if (!showComment) {
        unregister("comment");
      }
    }, [showDeliveryAddress, showCompanyAddress, showComment, unregister]);

    return (
      <Form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <BillingAddress
          register={register}
          errors={errors}
          trigger={trigger}
          onBlur={handleBlur}
        />
        <CheckboxGroup>
          <Input
            type="checkbox"
            id="deliveryAddressCheckbox"
            onChange={(e) => setShowDeliveryAddress(e.target.checked)}
          />
          <Label htmlFor="deliveryAddressCheckbox">
            Chci zadat dodací adresu
          </Label>
        </CheckboxGroup>
        {showDeliveryAddress && (
          <DeliveryAddress
            register={register}
            errors={errors}
            trigger={trigger}
          />
        )}
        <CheckboxGroup>
          <Input
            type="checkbox"
            id="companyAddressCheckbox"
            onChange={(e) => setShowCompanyAddress(e.target.checked)}
          />
          <Label htmlFor="companyAddressCheckbox">
            Chci zadat údaje pro firmu
          </Label>
        </CheckboxGroup>
        {showCompanyAddress && (
          <CompanyAddress
            register={register}
            errors={errors}
            trigger={trigger}
          />
        )}
        <CheckboxGroup>
          <Input
            type="checkbox"
            id="commentCheckbox"
            onChange={(e) => setShowComment(e.target.checked)}
          />
          <Label htmlFor="commentCheckbox">Chci přidat komentář</Label>
        </CheckboxGroup>
        {showComment && (
          <Comment register={register} errors={errors} trigger={trigger} />
        )}
      </Form>
    );
  }
);

export default PersonalInfo;
