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
      mode: "onBlur", // Validate on blur
    });

    const onSubmit = async (data) => {
      const fieldsToValidate = [
        "name",
        "surname",
        "street",
        "psc",
        "town",
        "email",
        "phone",
      ];
      if (showDeliveryAddress) {
        fieldsToValidate.push(
          "deliveryCompany",
          "deliveryName",
          "deliverySurname",
          "deliveryStreet",
          "deliveryPsc",
          "deliveryTown"
        );
      }
      if (showCompanyAddress) {
        fieldsToValidate.push("companyName", "ic", "dic");
      }
      if (showComment) {
        fieldsToValidate.push("comment");
      }
      const valid = await trigger(fieldsToValidate);
      onError(errors);
      if (valid) {
        console.log(data);
        onFormSubmitSuccess();
      }
    };

    useEffect(() => {
      onError(errors);
    }, [errors, onError]);

    useEffect(() => {
      const subscription = watch((value) => {
        saveFormState(FORM_STORAGE_KEY, value);
      });
      return () => subscription.unsubscribe();
    }, [watch]);

    const handleChange = async (fieldName) => {
      await trigger(fieldName);
      onError(errors);
    };

    const handleDeliveryAddressToggle = async (e) => {
      const checked = e.target.checked;
      setShowDeliveryAddress(checked);
      if (!checked) {
        clearErrors([
          "deliveryCompany",
          "deliveryName",
          "deliverySurname",
          "deliveryStreet",
          "deliveryPsc",
          "deliveryTown",
        ]);
        setValue("deliveryCompany", "");
        setValue("deliveryName", "");
        setValue("deliverySurname", "");
        setValue("deliveryStreet", "");
        setValue("deliveryPsc", "");
        setValue("deliveryTown", "");
        onError({});
      } else {
        await trigger([
          "deliveryCompany",
          "deliveryName",
          "deliverySurname",
          "deliveryStreet",
          "deliveryPsc",
          "deliveryTown",
        ]);
        onError(errors);
      }
    };

    const handleCompanyAddressToggle = async (e) => {
      const checked = e.target.checked;
      setShowCompanyAddress(checked);
      if (!checked) {
        clearErrors(["companyName", "ic", "dic"]);
        setValue("companyName", "");
        setValue("ic", "");
        setValue("dic", "");
        onError({});
      } else {
        await trigger(["companyName", "ic", "dic"]);
        onError(errors);
      }
    };

    const handleCommentToggle = async (e) => {
      const checked = e.target.checked;
      setShowComment(checked);
      if (!checked) {
        clearErrors(["comment"]);
        setValue("comment", "");
        onError({});
      } else {
        await trigger(["comment"]);
        onError(errors);
      }
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <BillingAddress
          register={register}
          errors={errors}
          onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
          <Comment
            register={register}
            errors={errors}
            onChange={handleChange}
          />
        )}
      </Form>
    );
  }
);

export default PersonalInfo;
