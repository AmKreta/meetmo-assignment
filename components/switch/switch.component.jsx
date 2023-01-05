import style from "./switch.module.css";
import { useState } from "react";

export default function Switch({ isOn, onToggle, size, gap }) {
  const [value, setValue] = useState(isOn);

  const toggleValue = () => {
    onToggle?.(!value);
    setValue((prevState) => !prevState);
  };

  return (
    <div
      onClick={toggleValue}
      className={`${style.switch} ${value ? style.on : style.off}`}
      style={{ "--size": size || "20px", "--gap": gap || "4px" }}
    />
  );
}
