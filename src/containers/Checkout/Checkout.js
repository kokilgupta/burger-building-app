import React, {Component} from 'react';
import CheckoutSummary from "../../components/order/CheckoutSummary/CheckoutSummary";
class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:1,
            meat:2
        }
    }
    componentDidMount() {
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        for(let param of query.entries())
        {
            ingredients[param[0]] = + param[1];
        }
        this.setState({ingredients:ingredients});
    }

    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    checkoutContinueHandler=()=>{
         this.props.history.replace('/checkout/contact-data');
    }
  render(){
      return (
          <div>
              <CheckoutSummary
                  ingredients={this.state.ingredients}
                  onCheckoutContinue={this.checkoutContinueHandler}
                  onCheckoutCancel={this.checkoutCancelHandler}/>
          </div>
      );
  }
}
export default Checkout;