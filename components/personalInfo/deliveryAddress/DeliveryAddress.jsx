import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const DeliveryAddress = ({ register, errors, trigger }) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Dodací společnost</Label>
        <Input
          {...register("company", {
            required: "Dodací společnost nesmí být prázdná",
            onBlur: () => trigger("company"), // Trigger validation on blur
          })}
          type="text"
          placeholder="Dodací společnost"
        />
        {errors.company && <Error>{errors.company.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Jméno</Label>
        <Input
          {...register("name", {
            required: "Jméno nesmí být prázdné",
            onBlur: () => trigger("name"), // Trigger validation on blur
          })}
          type="text"
          placeholder="Jméno"
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Příjmení</Label>
        <Input
          {...register("surname", {
            required: "Příjmení nesmí být prázdné",
            onBlur: () => trigger("surname"), // Trigger validation on blur
          })}
          type="text"
          placeholder="Příjmení"
        />
        {errors.surname && <Error>{errors.surname.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Ulice a číslo popisné</Label>
        <Input
          {...register("street", {
            required: "Ulice nesmí být prázdná",
            onBlur: () => trigger("street"), // Trigger validation on blur
          })}
          type="text"
          placeholder="Ulice a číslo popisné"
        />
        {errors.street && <Error>{errors.street.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>PSČ</Label>
        <Input
          {...register("psc", {
            required: "PSČ nesmí být prázdné",
            onBlur: () => trigger("psc"), // Trigger validation on blur
            pattern: {
              value: /^[0-9]{5}$/,
              message: "PSČ musí být pětimístné číslo",
            },
          })}
          type="text"
          placeholder="PSČ"
        />
        {errors.psc && <Error>{errors.psc.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Město</Label>
        <Input
          {...register("town", {
            required: "Město nesmí být prázdné",
            onBlur: () => trigger("town"), // Trigger validation on blur
          })}
          type="text"
          placeholder="Město"
        />
        {errors.town && <Error>{errors.town.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Země</Label>
        <Input
          {...register("country")}
          type="text"
          placeholder="Země"
          value="Česká republika"
          readOnly
        />
      </FormGroup>
    </FormContainer>
  );
};
