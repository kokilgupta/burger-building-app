import React, {Component} from 'react';
import styles from './Layout.module.css';
import Auxiliary from'../../hoc/Auxiliary';
import SideDrawer from '../Navigation/sideDrawer/sideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar';
class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
       this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler=()=>{
           this.setState((prevState)=>{
               return {showSideDrawer:!prevState.showSideDrawer};
           });
    }
    render(){
        return(

            <Auxiliary>
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}
export default Layout;