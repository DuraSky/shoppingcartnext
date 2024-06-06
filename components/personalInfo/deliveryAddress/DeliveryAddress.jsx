import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const DeliveryAddress = ({ register, errors, trigger }) => {
  return (
    <FormContainer>
      {/* <h2>Dodací adresa</h2> */}
      <FormGroup>
        <Label>Dodací společnost</Label>
        <Input
          {...register("company", {
            required: "Dodací společnost nesmí být prázdná",
            onChange: () => trigger("name"), // Trigger validation on change
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
            onChange: () => trigger("name"), // Trigger validation on change
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
            onChange: () => trigger("name"), // Trigger validation on change
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
            onChange: () => trigger("name"), // Trigger validation on change
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
            onChange: () => trigger("name"), // Trigger validation on change

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
            onChange: () => trigger("name"), // Trigger validation on change
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
