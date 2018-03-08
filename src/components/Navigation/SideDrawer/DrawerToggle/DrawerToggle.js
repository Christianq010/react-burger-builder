import React from 'react';

// Styling
import styled from 'styled-components';

const Wrapper = styled.div`
    @media (min-width: 500px) {
        display: none;
    }
`;

const Line = styled.div`
    width: 90%;
    height: 3px;
    margin: 3px;
    background-color: white;
`;

const Icon = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
`;


const drawerToggle = (props) => (
    <Wrapper>
        <Icon onClick={props.click}>
            <Line />
            <Line />
            <Line />
        </Icon>
    </Wrapper>
);

export default drawerToggle;