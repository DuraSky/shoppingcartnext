import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const CompanyAddress = ({ register, errors }) => {
  return (
    <FormContainer>
      {/* <h2>Dodací adresa pro firmu</h2> */}
      <FormGroup>
        <Label>Společnost</Label>
        <Input
          {...register("companyName", {
            required: "Společnost nesmí být prázdná",
          })}
          type="text"
          placeholder="Společnost"
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
          })}
          type="text"
          placeholder="IČ"
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
          })}
          type="text"
          placeholder="DIČ"
        />
        {errors.dic && <Error>{errors.dic.message}</Error>}
      </FormGroup>
    </FormContainer>
  );
};
