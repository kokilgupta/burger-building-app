import React,{Component} from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from '../src/components/Layout/Layout';
import Checkout from "./containers/Checkout/Checkout";
import { Route,Switch } from 'react-router-dom';
class App extends Component{
    render(){
        return(
            <div>
              <Layout>
                  <Switch>
                  <Route path="/checkout" component={Checkout}/>
                  <Route path="/" exact component={BurgerBuilder}/>
                  </Switch>
              </Layout>
            </div>
    );
    }
}

export default App;
