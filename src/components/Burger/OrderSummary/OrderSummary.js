import React, { Component } from 'react';

import Aux from '../../../hoc/ReactAux/ReactAux';
import Button from '../../UI/Button/Button';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import './OrderSummary.css';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    
    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <CSSTransition key={igKey} classNames="fade" timeout={300} mountOnEnter unmountOnExit >
                        <li>
                            <span>{igKey}</span>: {this.props.ingredients[igKey]}
                        </li>
                    </CSSTransition> );
            } );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <TransitionGroup component="ul" >
                    {ingredientSummary}
                </TransitionGroup>
                <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;