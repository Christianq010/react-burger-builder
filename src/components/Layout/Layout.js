import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './../Toolbar/Toolbar';
import Sidebar from './../Navigation/SideDrawer/SideDrawer';

// Styling
import styled from 'styled-components';

const Content = styled.main`
    margin-top: 72px;
`;

const layout = (props) => (
    <Aux>
        <Toolbar />
        <Sidebar />
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default layout; 