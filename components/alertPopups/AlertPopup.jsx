// AlertPopup.jsx
import React, { useEffect } from "react";
import { Alert, AlertContent, CloseButton } from "./styledAlerts";

const AlertPopup = ({ alert, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Alert type={alert.type}>
      <AlertContent>{alert.content}</AlertContent>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </Alert>
  );
};

export default AlertPopup;
