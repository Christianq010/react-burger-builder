import React from 'react';

// Styles
import styled from 'styled-components';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
`;

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <BuildControls>
        {controls.map(cntrl => (
            <BuildControl 
                        key={cntrl.label} 
                        label={cntrl.label} 
                        added={() => props.ingredientAdded(cntrl.type)} 
                        removed={() => props.ingredientRemoved(cntrl.type)} 
                        disabled={props.disabled[cntrl.type]}
            />
        ))}
    </BuildControls>
);

export default buildControls;