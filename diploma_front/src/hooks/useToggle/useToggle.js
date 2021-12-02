import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const changeToggle = (newValue) => {
    setValue(newValue);
  };

  return [
    value,
    {
      set: setValue,
      toggle,
      changeToggle,
    },
  ];
};
