import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const CompanyAddress = ({ register, errors, onChange }) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Společnost</Label>
        <Input
          {...register("companyName", {
            required: "Společnost nesmí být prázdná",
            onChange: () => onChange("companyName"),
          })}
          type="text"
          placeholder="Společnost"
          error={!!errors.companyName}
        />
        {errors.companyName && <Error>{errors.companyName.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>IČ</Label>
        <Input
          {...register("ic", {
            required: "IČ nesmí být prázdné",
            pattern: {
              value: /^[0-9]{8}$/,
              message: "IČ musí být osmiciferné číslo",
            },
            onChange: () => onChange("ic"),
          })}
          type="text"
          placeholder="IČ"
          error={!!errors.ic}
        />
        {errors.ic && <Error>{errors.ic.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>DIČ</Label>
        <Input
          {...register("dic", {
            required: "DIČ nesmí být prázdné",
            pattern: {
              value: /^[A-Z]{2}[0-9]{8,10}$/,
              message: "DIČ musí být platné",
            },
            onChange: () => onChange("dic"),
          })}
          type="text"
          placeholder="DIČ"
          error={!!errors.dic}
        />
        {errors.dic && <Error>{errors.dic.message}</Error>}
      </FormGroup>
    </FormContainer>
  );
};
