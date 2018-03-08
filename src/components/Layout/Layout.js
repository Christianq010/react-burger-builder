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
    // Use prevState instead of this.state to change state when Humburger icon is clicked
    sideDrawerClicked = () => {
        this.setState ( (prevState) => {
            return {showSideDraw: !prevState.showSideDraw}; 
        }

        );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerClicked}/>
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