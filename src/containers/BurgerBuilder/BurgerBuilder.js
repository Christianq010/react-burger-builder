import React, { Component } from 'react';

// Components
import Aux from './../../hoc/Aux/Aux';
import Burger from './../../components/Burger/Burger'
import BurgerControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import axios from './../../axios-orders';

// Global constants
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7  
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    // Update ingredients via info from the firebase DB
    componentWillMount () {
        axios.get('https://react-burger-project-66746.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    // Disable/ enable our order button based on Purchase State, 
    // basically return true if ingredients more than 0
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];    
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients =  {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // Also check if there is more than 0, dont remove what isnt there and go to -1
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients =  {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    // Show / Hide our Modal only if Checkout is clicked
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    // Click Backdrop and hide Modal + backdrop
    purcaseClosedHandler = () => {
        this.setState({purchasing: false});
    }

    // Click our Order Continue button and POST to Firebase DB
    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Chris Quyn',
                address: {
                    street: 'Kohuwala',
                    zip: '10250',
                    country: 'Sri Lanka'
                },
                email: 'christianq010@gmail.com',
            },
            shippingMethod: 'Premium'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
                // console.log(response)
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
                // console.log(error)
            });
        // alert('Check this out!');
    }

    render() {
        // Disable less button if in ingredient is < 0
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        // if not error show the spinner until the burger and burger controls is loaded
        // if error show paragraph
        let burger = this.state.error ? <p>Sorry, something is wrong</p> : <Spinner />;
        if (this.state.ingredients) {
            burger = (
                    <Aux>
                        <Burger ingredients={this.state.ingredients}/>
                        <BurgerControls 
                            ingredientAdded={this.addIngredientHandler}
                            ingredientRemoved={this.removeIngredientHandler}
                            disabled={disabledInfo}
                            purchaseable={this.state.purchaseable}
                            price={this.state.totalPrice}
                            ordered={this.purchaseHandler}
                        />
                    </Aux>
                    );
            // Loading gif Spinner, dont show Order summary if loading gif
            orderSummary =  <OrderSummary 
                                ingredients={this.state.ingredients}
                                purchasedCancelled={this.purcaseClosedHandler}
                                purchaseContinue={this.purchaseContinueHandler}
                                price={this.state.totalPrice}
                            >
                            </OrderSummary>
            
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return ( 
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purcaseClosedHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);