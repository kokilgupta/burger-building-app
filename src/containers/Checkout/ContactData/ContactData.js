import React,{Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import styles from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {
    state={
        ingredients:null,
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                        required:true
                }
            },
            address: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Address'
                },
                value:'',
                validation:{
                    required:true
                }
            },
            pincode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Area Pincode'
                },
                value:'',
                validation:{
                    required:true
                }
            },
            email  :{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your email address'
                },
                value:'',
                validation:{
                    required:true
                }
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[

                        {value:'Cheapest' ,displayValue: 'Cheapest'},
                        {value:'Fastest', displayValue: 'Fastest'}
                    ],
                    placeholder:'Method of delivery'
                },
                value:'',
                validation:{
                    required:true
                }
            }
        }
        ,loading:false
}
         orderHandler=(event)=>{
           event.preventDefault();
             this.setState({loading:true});
             const formData={};
             for(let formElementIdentifier in this.state.orderForm)
             {
                 formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
             }
             console.log(formData);
            //alert("Here's your burger");
              const order={
                  ingredients:this.props.ingredients,
                  price:this.props.price,
                  orderData:formData
              }
              axios.post('/orders.json',order)
                  .then(response=>{
                      this.setState({loading:false})
                      this.props.history.push('/');
                  })
                  .catch(error=> {

                      this.setState({loading:false})
                  });
         }
         inputChangedHandler=(event,inputIdentifier)=>{
             console.log(event.target.value)
             console.log(inputIdentifier)
             const updatedForm={
                 ...this.state.orderForm
             };
             const updatedFormElement={
                 ...updatedForm[inputIdentifier]
             };
             updatedFormElement.value=event.target.value;
             updatedForm[inputIdentifier]=updatedFormElement;
             this.setState({orderForm:updatedForm});
         }
    render(){
        const formElementArray=[];
        for(let key in this.state.orderForm)
        {
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
        let form=(
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement=>(
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                         changed={(event)=>this.inputChangedHandler(event,formElement.id)}/>
                ))}
                <Button btnType="Success" >Order</Button>
             </form>
        );
        if(this.state.loading)
        {
            form=<Spinner/>
        }
        return(

            <div className={styles.ContactData}>
                <h4>Enter Your Details</h4>
                {form}

            </div>
        );
    }
}
export default ContactData;