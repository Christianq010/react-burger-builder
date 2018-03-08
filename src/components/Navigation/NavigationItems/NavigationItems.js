import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

// Styling
import styled from 'styled-components';

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    @media (min-width: 500px) {
        flex-flow: row;
    }
`;


const navigationItems = () => (
    <NavList>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </NavList>
);

export default navigationItems;