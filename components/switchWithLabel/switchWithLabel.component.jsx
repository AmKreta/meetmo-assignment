import SwitchComponent from '../switch/switch.component';
import style from './switchWithLabel.module.css';

export default function({label, isOn, onToggle}){
    return <div className={style.switchContainer}>
        <div>{label}</div>
        <SwitchComponent {...{isOn, onToggle}}/>
    </div>
}