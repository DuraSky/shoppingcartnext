// AlertProvider.jsx
import React, { createContext, useState, useEffect, useCallback } from "react";
import AlertPopup from "./AlertPopup";
import { AlertContainer } from "./styledAlerts";

export const AlertContext = createContext();

export const AlertProvider = ({ children, initialAlerts = [] }) => {
  const [alerts, setAlerts] = useState(initialAlerts);

  useEffect(() => {
    if (initialAlerts.length > 0) {
      setAlerts(initialAlerts);
    }
  }, [initialAlerts]);

  const removeAlert = useCallback((index) => {
    setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
  }, []);

  return (
    <AlertContext.Provider value={{ alerts }}>
      {children}
      <AlertContainer>
        {alerts.map((alert, index) => (
          <AlertPopup
            key={index}
            alert={alert}
            onClose={() => removeAlert(index)}
          />
        ))}
      </AlertContainer>
    </AlertContext.Provider>
  );
};

export default AlertProvider;
