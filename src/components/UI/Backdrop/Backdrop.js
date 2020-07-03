import React from 'react';
import styles from './Backdrop.module.css';
const BackDrop=(props)=>(
    props.show ? <div className={styles.BackDrop} onClick={props.click}/> : null
);
export default BackDrop;