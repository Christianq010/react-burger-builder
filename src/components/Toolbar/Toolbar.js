import React from 'react';

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
`;


const toolbar = (props) => (
    <Toolbar>
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            <ul>
                <li>...</li>
                <li>...</li>
                <li>...</li>
            </ul>
        </nav>
    </Toolbar>
);

export default toolbar;