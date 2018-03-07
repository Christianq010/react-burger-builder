import React from 'react';

// Assets
import logopic from './../../assets/img/burger-logo.png';

// Styling
import styled from 'styled-components';

const LogoDiv = styled.div`
    background-color: white;
    padding: 8px;
    height: 80%;
    box-sizing: border-box;
    border-radius: 3px;
    img {
        height: 100%;
    }
`;


const logo = (props) => (
    <LogoDiv>
        <img src={logopic} alt="Burger Builder Logo" />
    </LogoDiv>
);

export default logo;