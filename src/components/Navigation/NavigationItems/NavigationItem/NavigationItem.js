import React from 'react';

// Styling
import styled from 'styled-components';

const Item = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    a {
        color: #8F5C2C;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
        &:hover,
        &:active,
        &.active {
            color: #40A4C8;
        }
    }
    /* Our classes for desktop (> 500px) */
    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
        a {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
            &:hover,
            &:active,
            &.active {
                background-color: #8F5C2C;
                border-bottom: 4px solid #40A4C8;
                color: white;
            }
        }
    }
`;


const navigationItem = (props) => (
    <Item>
        <a 
            href={props.link}
            className={props.active ? 'active' : null}
        >
            {props.children}
        </a>
    </Item>
);

export default navigationItem;