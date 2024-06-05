import React from "react";
import { TextArea, FormGroup, Label } from "../formStyles";

export const Comment = ({ register }) => {
  return (
    <FormGroup>
      <Label htmlFor="comment">Komentar nebo doplneni zdroju</Label>
      <TextArea
        id="comment"
        name="comment"
        placeholder="Komentar nebo doplneni zdroju"
        {...register("comment")}
      ></TextArea>
    </FormGroup>
  );
};
