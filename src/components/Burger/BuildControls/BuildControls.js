import React from 'react';

// Styles
import styled, {keyframes} from 'styled-components';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
`;

const rotate360 = keyframes`
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const OrderButton = styled.button`
    animation: ${rotate360} 2s linear infinite;
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
    &:hover:active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }
    &:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }
    &:not(:disabled) {
        animation: enable 0.3s linear;
    }
`;

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

// Use toFix to use number with two decimal places only
const buildControls = (props) => (
    <BuildControls>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(cntrl => (
            <BuildControl 
                        key={cntrl.label} 
                        label={cntrl.label} 
                        added={() => props.ingredientAdded(cntrl.type)}
                        removed={() => props.ingredientRemoved(cntrl.type)}
                        disabled={props.disabled[cntrl.type]}
            />
        ))}
        <OrderButton
                disabled={!props.purchaseable}
        >Order Now
        </OrderButton>
    </BuildControls>
);

export default buildControls;