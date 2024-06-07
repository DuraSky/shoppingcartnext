import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Recap from "../recap/Recap";
import { BillingAddress } from "./billingAddress/BillingAddress";
import { CompanyAddress } from "./companyAddress/CompanyAddress";
import { DeliveryAddress } from "./deliveryAddress/DeliveryAddress";
import { Comment } from "./comment/Comment";
import { Form, CheckboxGroup, Input, Label } from "./personalInfoStyle";

const FORM_STORAGE_KEY = "personalInfoForm";

const saveFormState = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFormState = (key) => {
  const savedState = localStorage.getItem(key);
  return savedState ? JSON.parse(savedState) : {};
};

const PersonalInfo = React.forwardRef(
  ({ onFormSubmitSuccess, onError }, ref) => {
    const [showDeliveryAddress, setShowDeliveryAddress] = useState(false);
    const [showCompanyAddress, setShowCompanyAddress] = useState(false);
    const [showComment, setShowComment] = useState(false);

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
      trigger,
      clearErrors,
    } = useForm({
      defaultValues: getFormState(FORM_STORAGE_KEY),
    });

    const onSubmit = (data) => {
      console.log(data);
      onFormSubmitSuccess();
    };

    useEffect(() => {
      onError(errors);
    }, [onError, errors]);

    useEffect(() => {
      const subscription = watch((value) => {
        saveFormState(FORM_STORAGE_KEY, value);
      });
      return () => subscription.unsubscribe();
    }, [watch]);

    // Function to handle blur event and update parent with current errors
    const handleBlur = async (fieldName) => {
      await trigger(fieldName);
      onError(errors);
    };

    // Handlers for toggling sections
    const handleDeliveryAddressToggle = (e) => {
      setShowDeliveryAddress(e.target.checked);
      if (!e.target.checked) {
        clearErrors([
          "company",
          "deliveryName",
          "deliverySurname",
          "deliveryStreet",
          "deliveryPsc",
          "deliveryTown",
        ]);
      }
    };

    const handleCompanyAddressToggle = (e) => {
      setShowCompanyAddress(e.target.checked);
      if (!e.target.checked) {
        clearErrors(["companyName", "ic", "dic"]);
      }
    };

    const handleCommentToggle = (e) => {
      setShowComment(e.target.checked);
      if (!e.target.checked) {
        clearErrors(["comment"]);
      }
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <BillingAddress
          register={register}
          errors={errors}
          onBlur={handleBlur}
        />
        <CheckboxGroup>
          <Input
            type="checkbox"
            id="deliveryAddressCheckbox"
            onChange={handleDeliveryAddressToggle}
          />
          <Label htmlFor="deliveryAddressCheckbox">
            Chci zadat dodací adresu
          </Label>
        </CheckboxGroup>
        {showDeliveryAddress && (
          <DeliveryAddress
            register={register}
            errors={errors}
            onBlur={handleBlur}
          />
        )}
        <CheckboxGroup>
          <Input
            type="checkbox"
            id="companyAddressCheckbox"
            onChange={handleCompanyAddressToggle}
          />
          <Label htmlFor="companyAddressCheckbox">
            Chci zadat údaje pro firmu
          </Label>
        </CheckboxGroup>
        {showCompanyAddress && (
          <CompanyAddress
            register={register}
            errors={errors}
            onBlur={handleBlur}
          />
        )}
        <CheckboxGroup>
          <Input
            type="checkbox"
            id="commentCheckbox"
            onChange={handleCommentToggle}
          />
          <Label htmlFor="commentCheckbox">Chci přidat komentář</Label>
        </CheckboxGroup>
        {showComment && (
          <Comment register={register} errors={errors} onBlur={handleBlur} />
        )}
      </Form>
    );
  }
);

export default PersonalInfo;
