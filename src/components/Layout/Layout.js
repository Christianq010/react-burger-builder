import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from './../Toolbar/Toolbar';
import Sidebar from './../Navigation/SideDrawer/SideDrawer';

// Styling
import styled from 'styled-components';

const Content = styled.main`
    margin-top: 72px;
`;

class Layout extends Component {
    state = {
        showSideDraw: true
    }
    sideDrawClosedHandler = () => {
        this.setState({showSideDraw: false});
    }

    render () {
        return (
            <Aux>
                <Toolbar />
                <Sidebar 
                    open={this.state.showSideDraw} 
                    closed={this.sideDrawClosedHandler}
                />
                <Content>
                    {this.props.children}
                </Content>
            </Aux>
        )
    }
}

export default Layout; 