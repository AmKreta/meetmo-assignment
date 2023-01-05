import style from './textInput.module.css';

export default function TextInput({value, onChange, placeholder, styleObj}){
    return <div className={style.input} style={styleObj}>
        <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
}