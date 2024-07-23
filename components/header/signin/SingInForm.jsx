import React, { useState } from "react";
import {
  Form,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
} from "./signInFormStyle";

export const SignInForm = ({ onClose, handleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    handleSignIn(email, password);
    //onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Přihlásit se</Title>
      <InputGroup>
        <Label>Email:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <Label>Heslo:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputGroup>
      <Button type="submit">Odeslat</Button>
    </Form>
  );
};
