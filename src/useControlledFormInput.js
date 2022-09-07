import { useState } from "react";
import React from "react";

export function useControlledFormInput() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const inputEventHandlers = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetStateHandler = () => {
    setFormData({
      username: "",
      password: "",
      remember: false,
    });
  };

  return {
    formData: formData,
    inputEventHandlers: inputEventHandlers,
    resetStateHandler: resetStateHandler,
  };
}
