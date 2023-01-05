import { useState } from 'react';
import SliderComponent from '../slider/slider.component';
import style from './sliderWithLabel.module.css';

export default function SliderWithLabel({label, value=0, unit='', onChange, min=0, max=100}){
    const [val,setVal]=useState(value);

    const changeHandler=function(newVal){
        setVal(newVal);
        onChange?.(newVal);
    }

    return <div className={style.sliderContainer}>
        <div className={style.labelContainer}>
            <div>{label}</div>
            <div>{val} {unit}</div>
        </div>
        <SliderComponent onChange={changeHandler} value={val} max={max} min={min}/>
    </div>
}