import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const DeliveryAddress = ({ register, errors, onChange }) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Dodací společnost</Label>
        <Input
          {...register("deliveryCompany", {
            required: "Dodací společnost nesmí být prázdná",
            onChange: () => onChange("deliveryCompany"),
          })}
          type="text"
          placeholder="Dodací společnost"
        />
        {errors.deliveryCompany && (
          <Error>{errors.deliveryCompany.message}</Error>
        )}
      </FormGroup>
      <FormGroup>
        <Label>Jméno</Label>
        <Input
          {...register("deliveryName", {
            required: "Jméno nesmí být prázdné",
            onChange: () => onChange("deliveryName"),
          })}
          type="text"
          placeholder="Jméno"
        />
        {errors.deliveryName && <Error>{errors.deliveryName.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Příjmení</Label>
        <Input
          {...register("deliverySurname", {
            required: "Příjmení nesmí být prázdné",
            onChange: () => onChange("deliverySurname"),
          })}
          type="text"
          placeholder="Příjmení"
        />
        {errors.deliverySurname && (
          <Error>{errors.deliverySurname.message}</Error>
        )}
      </FormGroup>
      <FormGroup>
        <Label>Ulice a číslo popisné</Label>
        <Input
          {...register("deliveryStreet", {
            required: "Ulice nesmí být prázdná",
            onChange: () => onChange("deliveryStreet"),
          })}
          type="text"
          placeholder="Ulice a číslo popisné"
        />
        {errors.deliveryStreet && (
          <Error>{errors.deliveryStreet.message}</Error>
        )}
      </FormGroup>
      <FormGroup>
        <Label>PSČ</Label>
        <Input
          {...register("deliveryPsc", {
            required: "PSČ nesmí být prázdné",
            pattern: {
              value: /^[0-9]{5}$/,
              message: "PSČ musí být pětimístné číslo",
            },
            onChange: () => onChange("deliveryPsc"),
          })}
          type="text"
          placeholder="PSČ"
        />
        {errors.deliveryPsc && <Error>{errors.deliveryPsc.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Město</Label>
        <Input
          {...register("deliveryTown", {
            required: "Město nesmí být prázdné",
            onChange: () => onChange("deliveryTown"),
          })}
          type="text"
          placeholder="Město"
        />
        {errors.deliveryTown && <Error>{errors.deliveryTown.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Země</Label>
        <Input
          {...register("deliveryCountry")}
          type="text"
          placeholder="Země"
          value="Česká republika"
          readOnly
        />
      </FormGroup>
    </FormContainer>
  );
};
