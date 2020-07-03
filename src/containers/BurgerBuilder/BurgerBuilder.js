import React,{Component} from 'react';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Auxiliary from '../../../src/hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
const INGREDIENTS_PRICES={
    salad:40,
    cheese:20,
    bacon:70,
    meat:60
};
class BurgerBuilder extends Component{
   state={
       ingredients:{
           meat:0,
           bacon:0,
           cheese:0,
           salad:0
               },
       totalPrice:40,
       purchasable:false,
       purchasing:false
        }
        updatePurchasable (ingredients)
        {
              const sum=Object.keys(ingredients)
                  .map(igKey=>{
                      return ingredients[igKey];
                  })
                  .reduce((sum,el)=>{
                      return sum+el;
                  },0);
              this.setState({purchasable:sum>0})
        }
        purchaseHandler=()=>{
                  this.setState({purchasing:true});
        }
         purchaseCancelHandler=()=> {
                  this.setState({purchasing:false});
         }
         purchaseContinueHandler=()=>{
           alert("Here's your burger");
         }
      addIngredientHandler=(type)=>{
             const oldCount=this.state.ingredients[type];
             const updatedCount= oldCount+1;
             const updatedIngredients={
                 ...this.state.ingredients
             };
             updatedIngredients[type]=updatedCount;
             const oldPrice=this.state.totalPrice;
             const addPrice=INGREDIENTS_PRICES[type];
             const newPrice=oldPrice+addPrice;
             this.setState({
                 totalPrice:newPrice,
                 ingredients:updatedIngredients
             });
             this.updatePurchasable(updatedIngredients);
        }

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount= oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const oldPrice=this.state.totalPrice;
        const reducePrice=INGREDIENTS_PRICES[type];
        const newPrice=oldPrice-reducePrice;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updatePurchasable(updatedIngredients);
    }
    render(){
       const disableInfo={
           ...this.state.ingredients
        };
       for(let key in disableInfo)
       {
           if(disableInfo[key]<=0)
           {
               disableInfo[key]=true;
           }
           else
           {
               disableInfo[key]=false;
           }
       }
        return(
          <Auxiliary>
              <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}r>
                  <OrderSummary
                      price={this.state.totalPrice}
                      continue={this.purchaseContinueHandler}
                      cancel={this.purchaseCancelHandler}
                      ingredients={this.state.ingredients}/>
              </Modal>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disable={disableInfo}
              price={this.state.totalPrice}
              purchase={this.state.purchasable}
              clicked={this.purchaseHandler}/>
          </Auxiliary>
        );
    }
}
export default BurgerBuilder;