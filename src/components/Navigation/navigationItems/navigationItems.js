import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from "./navigationItem/navigationItem";
const NavigationItems=(props)=>(
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact> Burger Builder</NavigationItem>
        <NavigationItem link="/orders"> Orders</NavigationItem>
    </ul>
);
export default NavigationItems;