import React from "react";
import { FormGroup, Label, Input, Error, FormContainer } from "../formStyles";

export const BillingAddress = ({ register, errors, onBlur }) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>Jméno</Label>
        <Input
          {...register("name", {
            required: "Jméno nesmí být prázdné",
            onBlur: () => onBlur("name"),
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
            onBlur: () => onBlur("surname"),
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
            onBlur: () => onBlur("street"),
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
            pattern: {
              value: /^[0-9]{5}$/,
              message: "PSČ musí být pětimístné číslo",
            },
            onBlur: () => onBlur("psc"),
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
            onBlur: () => onBlur("town"),
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
      <FormGroup>
        <Label>Email</Label>
        <Input
          {...register("email", {
            required: "Email nesmí být prázdný",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email musí být platná emailová adresa",
            },
            onBlur: () => onBlur("email"),
          })}
          type="text"
          placeholder="Email"
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
            onBlur: () => onBlur("phone"),
          })}
          type="text"
          placeholder="Telefon"
        />
        {errors.phone && <Error>{errors.phone.message}</Error>}
      </FormGroup>
    </FormContainer>
  );
};
