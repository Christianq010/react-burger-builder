import React from 'react';

// Styles
import styled, {css} from 'styled-components';

const BuildControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

const BuildButton = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }
    &:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }
    ${props => props.less && css`
        background-color: #D39952;
        color: white;
        &:hover:active {
            background-color: #DAA972;
            color: white;
        }
    `}
    ${props => props.more && css`
        background-color: #8F5E1E;
        color: white;
        &:hover:active {
            background-color: #99703F;
            color: white;
        }
    `}
    ${props => props.disabled && css`
        background-color: grey;
        color: white;
    `}
`;

const Label = styled.label`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;


const buildControl = (props) => (
    <BuildControl>
        <Label>{props.label}</Label>
        <BuildButton less onClick={props.removed} disabled={props.disabled}>Less</BuildButton>
        <BuildButton more onClick={props.added}>More</BuildButton>
    </BuildControl>
)

export default buildControl;