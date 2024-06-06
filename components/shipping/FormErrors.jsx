import { useState, useCallback } from "react";

const useFormErrors = () => {
  const [formErrors, setFormErrors] = useState({});

  const updateFormErrors = useCallback((errors) => {
    setFormErrors((prevErrors) => {
      const newErrors = { ...errors };
      const isEqual =
        Object.keys(newErrors).length === Object.keys(prevErrors).length &&
        Object.keys(newErrors).every(
          (key) => newErrors[key] === prevErrors[key]
        );

      if (!isEqual) {
        return newErrors;
      }
      return prevErrors;
    });
  }, []);

  return [formErrors, updateFormErrors];
};

export default useFormErrors;
