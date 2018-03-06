import React from 'react';

// Styles
import styled from 'styled-components';

const BtnContinue = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    &:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }
    &.cancel {
        color: brown;
    }
    &.sucess {
        color: green;
    }
`;

const Button = (props) => (
    <BtnContinue
        className={props.class}
        onClick={props.clicked}
    >
        {props.children}
    </BtnContinue>
);

export default Button;