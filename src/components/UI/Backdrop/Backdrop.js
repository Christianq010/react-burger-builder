import React from 'react';

// Styles
import styled from 'styled-components';

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

// Our dim background behind the modal that goes away with a click
const backdrop = (props) => (
    props.show ? <Backdrop onClick={props.clicked}></Backdrop> : null
);

export default backdrop;