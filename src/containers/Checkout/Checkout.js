import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients : {
            meat:1,
            cheese:1,
            bacon:1,
            salad:1
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients:ingredients});
    }
    checkoutCancelHandler = () =>{
        this.props.history.goBack();
    }
    checkoutContinueHandler= () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path+'/contact-data'} component={ContactData}>Contact Data</Route>
            </div>
        )
    }
}
export default Checkout;