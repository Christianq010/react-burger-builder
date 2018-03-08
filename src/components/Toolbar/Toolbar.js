import React from 'react';

import Logo from './../Logo/Logo';
import Nav from './../Navigation/NavigationItems/NavigationItems';
import ToggleIcon from './../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

// Styles
import styled from 'styled-components';

const Toolbar = styled.header`
    position: fixed;
    height: 56px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    nav {
        height: 100%;
    }
    /* Hide when above 500px */
    @media (max-width: 499px) {
        /* display: none; */
    }
`;

// Only for controlling logo size
const LogoHeight = styled.div`
    height: 80%;
`;


const toolbar = (props) => (
    <Toolbar>
        <ToggleIcon click={props.drawerToggleClicked} />
        <LogoHeight>
            <Logo />
        </LogoHeight>
        <Nav />
    </Toolbar>
);

export default toolbar;