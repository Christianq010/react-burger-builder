import React from 'react';

// Styling
import styled from 'styled-components';

// Componets
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }

    @media (min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }
`;


const burger = (props) => {
    // Transform an object of keywords into an array of burger ingredients where
    // the value of the object should tell me how many ingredients to add, and the key
    // should tell me the type of ingredient needed
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    });
    return (
        <Burger>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </Burger>
    );
}

export default burger;