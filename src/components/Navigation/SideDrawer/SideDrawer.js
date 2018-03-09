import React from 'react';

import Aux from './../../../hoc/Aux/Aux';
import Logo from './../../Logo/Logo';
import NavItems from './../NavigationItems/NavigationItems'; 
import Backdrop from './../../UI/Backdrop/Backdrop';

// Styling
import styled from 'styled-components';

const SideDrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    @media (min-width: 500px) {
        display: none;
    }
    &.open {
        transform: translateX(0);
    }
    &.close {
        transform: translateX(-100%);
    }
`;

const LogoHeight = styled.div`
    height: 11%;
    margin-bottom: 17px;
`;

// Use above classes when backdrop clicked
const sideDrawer = (props) => {
    let attachClass = ['close'];
    if (props.open) {
        attachClass = ['open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <SideDrawer className={attachClass}>
                <LogoHeight>
                    <Logo />
                </LogoHeight>
                <NavItems />
            </SideDrawer>
        </Aux>
    );
}

export default sideDrawer;