import React from 'react';
import Aux from '../../hoc/Aux';

// Styling
import styled from 'styled-components';

const Content = styled.main`
  margin-top: 16px;
`;

const layout = (props) => (
    <Aux>
        <div>
            <p>Toolbar, Sidebar, Backdrop</p>
        </div>
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default layout; 