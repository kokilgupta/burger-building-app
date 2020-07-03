import React from 'react';
import styles from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/DrawerToggle/DrawerToggle';
const Toolbar=(props)=>(
    <header className={styles.Toolbar}>
       <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={styles.Logo}>
            <Logo/>
        </div>
         <nav className={styles.DesktopOnly}>
             <NavigationItems/>
         </nav>
    </header>
);
export default Toolbar;