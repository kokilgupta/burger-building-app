import React from 'react';
import Logo from '../../Logo/Logo';
import styles from './SideDrawer.module.css';
import NavigationItems from '../navigationItems/navigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';
const SideDrawer=(props)=>{
    let attachedClasses=[styles.SideDrawer, styles.Close];
    if(props.open){
        attachedClasses=[styles.SideDrawer,styles.Open];
    }
    return(
        <Auxiliary>
            <BackDrop show={props.open} click={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>

    );
};
export default SideDrawer;