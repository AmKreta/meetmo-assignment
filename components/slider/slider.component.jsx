import { useEffect, useState } from "react";
import style from "./slider.module.css";

export default function Slider({ value, onChange, min = 0, max = 100 }) {
  const [val, setVal] = useState(value);

  useEffect(
    function () {
      onChange?.(val);
    },
    [val]
  );

  return (
    <div className={style.sliderContainer}>
      <input
        className={style.slider}
        type="range"
        min={min}
        max={max}
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
      />
    </div>
  );
}
