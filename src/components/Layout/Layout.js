import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './../Toolbar/Toolbar';

// Styling
import styled from 'styled-components';

const Content = styled.main`
    margin-top: 72px;
`;

const layout = (props) => (
    <Aux>
        <Toolbar />
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default layout; 