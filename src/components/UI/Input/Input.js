import React from 'react';
import Styles from './Input.module.css';
const input=(props)=>{
    let inputElement  = null;
    switch(props.elementType){
        case('input'):
            inputElement=<input className={Styles.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case('textarea'):
            inputElement=<textarea className={Styles.InputElement}{...props.elementConfig}value={props.value}onChange={props.changed}/>
            break;
        case('select'):
            inputElement=(<select className={Styles.InputElement} value={props.value}onChange={props.changed}>
                {props.elementConfig.options.map(options=>(
                    <option key={options.value} value={options.value}>
                        {options.displayValue}
                    </option>
                    ))}
            </select>);
            break;
        default:
            inputElement=<input className={Styles.InputElement}{...props.elementConfig}value={props.value}/>
    }

    return (
        <div className={Styles.Input}>
            <label className={Styles.Label}>{props.label}</label>
            {inputElement}
        </div>
        );
};
export default input;