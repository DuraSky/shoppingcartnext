import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const BillingAddress = ({ register, errors, onChange }) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Jméno</Label>
        <Input
          {...register("name", {
            required: "Jméno nesmí být prázdné",
            onChange: () => onChange("name"),
          })}
          type="text"
          placeholder="Jméno"
          error={!!errors.name}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Příjmení</Label>
        <Input
          {...register("surname", {
            required: "Příjmení nesmí být prázdné",
            onChange: () => onChange("surname"),
          })}
          type="text"
          placeholder="Příjmení"
          error={!!errors.surname}
        />
        {errors.surname && <Error>{errors.surname.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Ulice a číslo popisné</Label>
        <Input
          {...register("street", {
            required: "Ulice nesmí být prázdná",
            onChange: () => onChange("street"),
          })}
          type="text"
          placeholder="Ulice a číslo popisné"
          error={!!errors.street}
        />
        {errors.street && <Error>{errors.street.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>PSČ</Label>
        <Input
          {...register("psc", {
            required: "PSČ nesmí být prázdné",
            pattern: {
              value: /^[0-9]{5}$/,
              message: "PSČ musí být pětimístné číslo",
            },
            onChange: () => onChange("psc"),
          })}
          type="text"
          placeholder="PSČ"
          error={!!errors.psc}
        />
        {errors.psc && <Error>{errors.psc.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Město</Label>
        <Input
          {...register("town", {
            required: "Město nesmí být prázdné",
            onChange: () => onChange("town"),
          })}
          type="text"
          placeholder="Město"
          error={!!errors.town}
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
      <FormGroup>
        <Label>Email</Label>
        <Input
          {...register("email", {
            required: "Email nesmí být prázdný",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email musí být platná emailová adresa",
            },
            onChange: () => onChange("email"),
          })}
          type="text"
          placeholder="Email"
          error={!!errors.email}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </FormGroup>
      <FormGroup>
        <Label>Telefon</Label>
        <Input
          {...register("phone", {
            required: "Telefon nesmí být prázdný",
            pattern: {
              value: /^[0-9]{9}$/,
              message: "Telefon musí obsahovat pouze devítimístné číslo",
            },
            onChange: () => onChange("phone"),
          })}
          type="text"
          placeholder="Telefon"
          error={!!errors.phone}
        />
        {errors.phone && <Error>{errors.phone.message}</Error>}
      </FormGroup>
    </FormContainer>
  );
};
