import React , {Component} from 'react';
import styles from './CheckoutSummary.module.css';
import Burger from "../../Burger/Burger";
import Button from '../../UI/Button/Button';
const CheckoutSummary=(props)=>{
    return(
        <div className={styles.CheckoutSummary}>
               <h1>We hope you'll like the burger!!</h1>
            <div style={{width:'100%',margin:'auto'}}>
              <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinue}>PROCEED</Button>
        </div>
    );

}
export default CheckoutSummary;