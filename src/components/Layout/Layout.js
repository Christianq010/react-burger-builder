import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>
            <p>Toolbar, Sidebar, Backdrop</p>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout; 