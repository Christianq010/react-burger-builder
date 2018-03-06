import React from 'react';

import Aux from '../../../hoc/Aux';

import Button from './../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    {igKey}: {props.ingredients[igKey]}
                </li>
            );
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your tasty burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button class="cancel" clicked={props.purchasedCancelled}>Cancel</Button>
            <Button class="success" clicked={props.purchaseContinue}>Contine</Button>
        </Aux>
    )
}

export default orderSummary;