import React, {Component} from 'react';

import Aux from '../../../hoc/Aux';

import Button from './../../UI/Button/Button';

// Turned into a Class Components for debugging purposes, can be a sfc
class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        {igKey}: {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your tasty burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout</p>
                <Button class="cancel" clicked={this.props.purchasedCancelled}>Cancel</Button>
                <Button class="success" clicked={this.props.purchaseContinue}>Contine</Button>
            </Aux>
        );
    }
}

export default OrderSummary;